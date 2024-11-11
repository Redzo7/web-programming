<?php // TODO: fájlba
function get_songs() {
    return [
        (object)[
            "id" => 0,
            "title" => "Bagira",
            "artist" => "BETON HOFI",
            "length_sec" => 123
        ],
        (object)[
            "id" => 1,
            "title" => "Californication",
            "artist" => "Red Hot Chili Peppers",
            "length_sec" => 322
        ],
        (object)[
            "id" => 2,
            "title" => "Számoló dal",
            "artist" => "Kerekmese",
            "length_sec" => 146
        ],
    ];
}
?>

<?php function songs_page() { ?>
    <?php $song_list = get_songs() ?>
    <h2>Zene lista</h2>
    <ul>
        <?php foreach($song_list as $song): ?>
            <li> <?= $song->title ?> </li>
        <?php endforeach ?>
    </ul>
<?php } ?>