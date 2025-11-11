<?php
interface IFileIO
{
    public function save($data);
    public function load();
}

abstract class FileIO implements IFileIO
{
    protected $filepath;

    public function __construct($filename)
    {
        if (!file_exists($filename)) {
            if (false === @file_put_contents($filename, '')) {
                throw new Exception("Cannot create data source {$filename}.");
            }
        }
        if (!is_readable($filename) || !is_writable($filename)) {
            throw new Exception("Data source {$filename} is not readable or writable.");
        }
        $this->filepath = realpath($filename);
    }
}

class JsonIO extends FileIO
{
    private $assoc;

    public function __construct($filename, $assoc = true)
    {
        parent::__construct($filename);
        $this->assoc = $assoc;
    }

    public function load(): mixed
    {
        $file_content = file_get_contents($this->filepath);
        return json_decode($file_content, $this->assoc) ?: [];
    }

    public function save($data): void
    {
        $json_content = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($this->filepath, $json_content);
    }
}

class SerializeIO extends FileIO
{
    public function load(): mixed
    {
        $file_content = file_get_contents($this->filepath);
        return unserialize($file_content) ?: [];
    }

    public function save($data): void
    {
        $serialized_content = serialize($data);
        file_put_contents($this->filepath, $serialized_content);
    }
}

interface IStorage
{
    public function add($record): string;
    public function findById(string $id);
    public function findAll(array $params = []);
    public function findOne(array $params = []);
    public function update(string $id, $record);
    public function delete(string $id);

    public function findMany(callable $condition);
    public function updateMany(callable $condition, callable $updater);
    public function deleteMany(callable $condition);
}

class Storage implements IStorage
{
    protected $contents;
    protected $io;

    public function __construct(IFileIO $io)
    {
        $this->io = $io;
        $this->contents = (array) $this->io->load();
    }

    public function __destruct()
    {
        try {
            $this->io->save($this->contents);
        } catch (Exception $e) {
            error_log("Failed to save data on destruction: " . $e->getMessage());
        }
    }

    public function add($record): string
    {
        $id = uniqid('', true);
        if (is_array($record)) {
            $record['id'] = $id;
        } elseif (is_object($record)) {
            $record->id = $id;
        }
        $this->contents[$id] = $record;
        return $id;
    }

    public function findById(string $id): mixed
    {
        return $this->contents[$id] ?? null;
    }

    public function findAll(array $params = []): array
    {
        return array_filter($this->contents, function ($item) use ($params): bool {
            foreach ($params as $key => $value) {
                if (((array) $item)[$key] !== $value) {
                    return false;
                }
            }
            return true;
        });
    }

    public function findOne(array $params = []): mixed
    {
        $found_items = $this->findAll($params);
        $first_index = array_key_first($found_items);
        return $first_index !== null ? $found_items[$first_index] : null;
    }

    public function update(string $id, $record): void
    {
        if (is_array(value: $record)) {
            $record['id'] = $id;
        } elseif (is_object(value: $record)) {
            $record->id = $id;
        }
        $this->contents[$id] = $record;
    }

    public function delete(string $id): void
    {
        unset($this->contents[$id]);
    }

    public function findMany(callable $condition): array
    {
        return array_filter($this->contents, $condition);
    }

    public function updateMany(callable $condition, callable $updater): void
    {
        array_walk($this->contents, function (&$item) use ($condition, $updater): void {
            if ($condition($item)) {
                $updater($item);
            }
        });
    }

    public function deleteMany(callable $condition): void
    {
        $this->contents = array_filter($this->contents, fn($item): bool => !$condition($item));
    }
}