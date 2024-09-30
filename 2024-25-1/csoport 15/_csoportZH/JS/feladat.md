# Speys Q

A Speys Q űrhajós vállalat új űrsiklót szeretne a piacra dobni. Gépeiket Disney hercegnőkről nevezte el, a következő fejlesztésük a Vanellope von Schweetz nevet fogja viselni.
A paraméterek megtervezésében, a korábbi gépek statisztikáinak elemzésében a Te segítségedre lesz szükségük!

# Tudnivalók

- A csoport zárthelyi megoldására 45 perc áll rendelkezésre, majd ezen felül 5 percig marad nyitva a Canvas felület, ezalatt van idő a megoldás feltöltésére.
- A Canvasba egyetlen ZIP fájlt kell feltölteni, melynek tartalma egy .html és egy .js fájl, mely tartalmazza a megoldásod.
- Van egy kiinduló állomány, ZIP formátumban. A kiinduló fájlok tartalmazzák az adathalmazt, valamint a delegate() függvényt.
- A megoldást JavaScriptben kell elkészíteni.

# 1. feladat - 1 pont

Először a piaci igények és a támogatottság felmérésére lesz szükségünk.\
Melyek azok a gépek, amelyeknek kevesebb, mint 2 szponzora volt? (sponsor)\
Írd ki a konzolra!

_megoldás: Ariel, Mulan, Elsa_

# 2. feladat - 2 pont

Fontos szem előtt tartani és behúzni támogatónak az űrhajóalkatrész-gyártás
legnagyobb szereplőit, és figyelembe venni igényeiket. A Spes Q napjaiban ezek a Disney és a Microsoft.

Mennyi az átlagos űrbeérési ideje (seconds_to_orbit) azoknak az űrhajóknak, melyeknek támogatói közt szerepel a Disney vagy a Microsoft?

_megoldás: 250.875_

# 3. feladat - 2 pont

Vizsgáljuk meg, hogy az egyes űrhajókat milyen költségvetésből tudtuk előállítani.
A költségvetés tervezésnél figyelembe vesszük a szponzorok által nyújtott támogatást is, melybe azonban arányosan beleszámít az űrhajó teljesítménye.

Az űrhajók teljesítményi arányszáma: (400 - seconds_to_orbit):

Az űrhajók költségvetése az alábbiakból tevődik össze:

- 25000 alaptőke
- szponzoronként a támogatásuk alapja szorozva az űrhajó teljesítményi arányszámával

A szponzorok támogatásának alapján a sponsors objektum tartalmazza.

_pl: űrhajó, ami 156 mp alatt jut ki az űrbe, és szponzora csak a Microsoft:_\
_25000 + 3000 \* (400 - 156), ahol_

- _25000=alaptőke,_
- _3000=Microsoft támogatási alap,_
- _(400 - 156)=teljesítményi arányszám_

Írd ki a konzolra, hogy az egyes űrhajók mekkora költségvetésből készültek!

_megoldás: Hófehérke (551500), Hamupipőke (235000), Merida (1726000), Ariel (41500), Belle (1580400), Jasmine (105500), Pocahontas (1152000), Mulan (25000), Rapunzel (2524000), Elsa (525500), Anna (2214000)_

# 4. feladat - 2 pont

Jelenítsd meg az előző feladat megoldását!
Az oldalon listában `ul` jelenjen meg minden űrhajó, mellette zárójelben a költségvetésével!

# 5. feladat - 1 + 2 pont

A Spes Q legújabb döntésének megfelelően a hadiiparba is elkezdenek tőkét fektetni.\
Ehhez szükségük van arra, hogy meg tudják tervezni a flottájukat már meglévő típusú űrsiklóikból.

a) Tedd lehetővé azt, hogy a listaelemre kattintással az űrhajó kijelölhető legyen! Kijelölt gépre kattintás esetén szűnjön meg a kijelölés. (1 pont)

Használd a kiinduló fájlban létrehozott stílusosztályt.

b) Helyezz el egy gombot az előző feladatban létrehozott lista alá "Hozzáad" felirattal. A gombra kattintáskor az éppen kijelölt űrhajókat tárold el ("add hozzá a flottához"), majd a flottát jelenítsd meg az eredeti alatt, egy külön listában (`ul`). (2 pont)

(törölni ne lehessen a flottából, csupán a hozzáadogatással gyűjteni a hajókat)
