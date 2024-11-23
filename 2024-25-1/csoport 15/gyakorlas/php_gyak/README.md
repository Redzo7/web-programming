# Gyakorló feladat - PHP

November végével egyre többet szól az All I want for christmas című szám is, ezzel jelezve Télapó számára, hogy ideje elkezdeni a munkát a műhelyében.
Segítségül hívta legügyesebb Krampuszait, Diddy-t, Kolibrit, Tuttifruttit és Thomas O'Pamacskát.
A krampuszokkal közösen kezdték el összegyűjteni és elkészíteni a különböző ajándékokat, viszont az előrehaladásukról szeretnének egy webes megjelenítőt készíteni, ami a te feladatod lesz.

## Rövid leírás

A feladatot PHP-ban kell megoldani.
A feladat egyszerűsége miatt elég 1 fájlban dolgoznod (+ az adattároló fájl), viszont, ha jobban átlátod, úgy nyugodtan válaszd szét a kódod.
Ha valahol nem tudsz továbbhaladni, mivel nem tudtál megoldani egy részfeladatot, vedd fel az értékét egy változóba és dolgozz azzal. Ezesetben kérlek ezt kommentben jelezd felém is.
Ha bármilyen kérdésed van, megakadtál, hibát találsz a feladatban jelezd felém Teamsen!

## Kiindulás

```php
[
    (object)[
        'gift' => 'Candy cane',
        'requested_amount' => 129,
        'delivered_amount' => 250,
        'contributed' => ['Diddy', 'Kolibri']
    ],
    (object)[
        'gift' => 'Fortnite 1 year battle pass',
        'requested_amount' => 7389,
        'delivered_amount' => 3497,
        'contributed' => ['Kolibri'. 'Thomas O\'Pamacska']
    ],
    (object)[
        'gift' => 'Theater ticket',
        'requested_amount' => 3667,
        'delivered_amount' => 3667,
        'contributed' => ['Diddy', 'Thomas O\'Pamacska']
    ],
    (object)[
        'gift' => 'PC accessories',
        'requested_amount' => 6322,
        'delivered_amount' => 6322,
        'contributed' => ['Kolibri']
    ],
    (object)[
        'gift' => 'The new Green Day bakelite disc',
        'requested_amount' => 6933,
        'delivered_amount' => 3754,
        'contributed' => ['Kolibri', 'Tuttifrutti', 'Thomas O\'Pamacska']
    ],
    (object)[
        'gift' => 'Mushroom shaped crochet hat',
        'requested_amount' => 1888,
        'delivered_amount' => 352,
        'contributed' => ['Kolibri', 'Tuttifrutti']
    ],
]
```

1.  a) Sajnos Rudolf, a rénszarvas lebetegedett, így a beszerzési folyamat ideje jelentősen megnövekedett, hiszen így Télapónak a GLS-re kell hagyatkoznia a szállításban. Írd ki a weboldalra, hogy melyik az a termék, amire különös figyelmet kell fordítani, azaz, amiből még a legtöbb darabot kell beszerezni. (1 pont)

b) Hány olyan termék van, melyből már raktáron van a szükséges mennyiség? Írd ki az előző alá. (1 pont)

2. Az ajándékok nem csak a gyerekek számára kiemelten fontosak, vannak olyan ajándékok, mellyel a Krampuszok is szívesebben foglalkoznak. Sajnos Kolibri az elmúlt időszakban nem dolgozott olyan produktívan, mint a többiek, így Télapó szeretné látni, hogy Kolibri mely ajándékok beszerzésével foglalkozott.

a) Jelenítsd meg egy számozatlan listában az összes ajándékot, mögötte zárójelben a beszerzett/szükséges mennyiségeket. (2 pont)
b) Az összes olyan ajándék, melynek folyamataiban Kolibri részt vett, legyen zöld betűszínű (1 pont)

3. Télapó a gyermekek által összeállított listából szeretne tapasztalatokat levonni, szeretné látni a legnépszerűbb ajándékokat.

a) Készíts egy űrlapot az oldalra, melyben egyetlen szöveges beviteli mező van, amibe egy számot fogunk írni. Ha elküldjük az űrlapot, akkor jelenjen meg a beviteli mező alatt a megadott érték. (1 pont)
b) Beküldés után egy számozatlan listában jelenjen meg az összes olyan ajándék, melyből legalább a megadott mennyiséget kérték összességében az emberek. (reqested_amount) (1 pont)
c) Ha nem számot kapunk a szöveges mezőnkbe, úgy a lista helyett írjon egy piros betűs hibát az oldal. (1 pont)
d) Ne jelenjen meg semmilyen hiba vagy figyelmeztetés az oldal betöltésekor. (létezik-e a kulcs?) (1 pont)

4. A kiinduló adatokat fájlban tároljuk, a használathoz innen olvasd be őket. (1 pont)

```js
{
    {
        'gift': 'Candy cane',
        'requested_amount' : 129,
        'delivered_amount' : 250,
        'contributed' : ['Diddy', 'Kolibri']
    },
    {
        'gift' : 'Fortnite 1 year battle pass',
        'requested_amount' : 7389,
        'delivered_amount' : 3497,
        'contributed' : ['Kolibri'. 'Thomas O\'Pamacska']
    },
    {
        'gift' : 'Theater ticket',
        'requested_amount' : 3667,
        'delivered_amount' : 3667,
        'contributed' : ['Diddy', 'Thomas O\'Pamacska']
    },
    {
        'gift' : 'PC accessories',
        'requested_amount': 6322,
        'delivered_amount' : 6322,
        'contributed' : ['Kolibri']
    },
    {
        'gift' : 'The new Green Day bakelite disc',
        'requested_amount' : 6933,
        'delivered_amount' : 3754,
        'contributed' : ['Kolibri', 'Tuttifrutti', 'Thomas O\'Pamacska']
    },
    {
        'gift' : 'Mushroom shaped crochet hat',
        'requested_amount' : 1888,
        'delivered_amount' : 352,
        'contributed' : ['Kolibri', 'Tuttifrutti']
    }
}
```
