# Vízcsepp mester

Az aranysárkány megidézéséhez az öt alapelemnek egyesülnie kell a Szent Helyen, miután összegyűjtötték az összes aranyrögöt. Sajnos semmilyen telekommunikációs eszköz nem áll rendelkezésükre, így nem tudnak kommunikálni egymással a stratégiáról, csak bolyonganak...
Továbbá Bu, a gonosz tábornok éppen megakadályozni szeretné az 5 elemegyesülését, így néhány helyen ő is megfordult szervezkedni...

# Adatok

```php
$locations = [
    (object)[
        'name' => 'Szent Hely',
        'visited_by' => ['Waterdrop', 'Flamo'],
        'fragments' => 17
    ],
    (object)[
        'name' => 'Csodák Palotája',
        'visited_by' => ['Jade', 'Bu'],
        'fragments' => 2
    ],
    (object)[
        'name' => 'Százbűn Barlang',
        'visited_by' => ['Niwa'],
        'fragments' => 32
    ],
    (object)[
        'name' => 'Rózsa Magdolna függőkertje',
        'visited_by' => ['Flamo', 'Shao Yen', 'Bu'],
        'fragments' => 18
    ],
    (object)[
        'name' => 'Ordító Szakadék',
        'visited_by' => ['Jin Huo', 'Jade'],
        'fragments' => 21
    ],
    (object)[
        'name' => 'Gyenesdiási Elhagyatott Palota',
        'visited_by' => ['Bu', 'Flamo'],
        'fragments' => 28
    ]
    (object)[
        'name' => 'Rapülő Sziget',
        'visited_by' => ['Niwa', 'Waterdrop'],
        'fragments' => 34
    ],
]

```

# Tudnivalók

- A feladatot PHP-ban kell megoldani
- A feladat egyszerűsége miatt nem elvárt a PHP több fájlba való kódszétválasztása.
- Ha valamivel nem tudsz továbbhaladni, mert egy részfeladat megoldására lenne szükséged, vedd fel egy változóba, és azzal számolj tovább. Ezesetben kérlek ezt jelezd felém kommentben.
- Ha valami nem egyértelmű a feladatleírásból, jelezd mihamarabb!

# Elveszett aranyrögök (1 pont)

Azokon a helyeken, ahol Bu is járt, az alapos előkészületeinek eredményeképp az ottani aranyrögök felét elrabolta. Írd ki a képernyőre, hogy összesen mennyi aranyrögöt szerzett meg Bu!

# Flamo az áruló (2 + 1 pont)

a) A helyszínek vizuális megjelenítése érdekében készíts egy számozatlan listát a tárolt helyszínek neveivel, utána zárójelben az ott található aranyrögökkel. (2 pont)

b) Flamo nagyon sunyin viselkedett, és többször látták Bu tábornokkal egy helyen. Azokat a helyszíneket, melyet Bu is látogatott, kék betűszínne írd a képernyőre (használd a .bu stílusosztályt) (1 pont)

# Szűrés (4 pont)

a) Helyezz egy űrlapot az oldalra, ami tartalmaz egy szöveges beviteli mezőt, valamint egy submit gombot. Az űrlap beküldése esetén a beviteli mezőbe írt értéket írd ki az űrlap alá. (1 pont)\
b) Ha nem egész számot ad meg a szöveges mezőbe a felhasználó, akkor azt jelezd hibaüzenettel (1 pont)\
c) Ha egész számot ad meg a szöveges mezőbe a felhasználó, akkor jelenítsd meg egy számozatlan listában azokat a helyszíneket, melyeknél eredetileg legalább annyi aranyrög volt megtalálható. (1 pont)\
d) Érd el, hogy első betöltéskor nem jelenik meg hibaüzenet, vagy figyelmeztetés (1 pont)

# Perzisztens adattárolás (2 pont)

A kódba beégetett bemeneti adatok helyett olvasd ki azokat fájlból!

```js
[
  {
    name: "Szent Hely",
    visited_by: ["Waterdrop", "Flamo"],
    fragments: 17,
  },
  {
    name: "Csodák Palotája",
    visited_by: ["Jade", "Bu"],
    fragments: 2,
  },
  {
    name: "Százbűn Barlang",
    visited_by: ["Niwa"],
    fragments: 32,
  },
  {
    name: "Rózsa Magdolna függőkertje",
    visited_by: ["Flamo", "Shao Yen", "Bu"],
    fragments: 18,
  },
  {
    name: "Ordító Szakadék",
    visited_by: ["Jin Huo", "Jade"],
    fragments: 21,
  },
  {
    name: "Gyenesdiási Elhagyatott Palota",
    visited_by: ["Bu"],
    fragments: 28,
  },
  {
    name: "Rapülő Sziget",
    visited_by: ["Niwa", "Waterdrop"],
    fragments: 34,
  },
];
```
