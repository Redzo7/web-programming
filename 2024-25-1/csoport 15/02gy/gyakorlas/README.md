# Gyakorló feladat - Tömbfüggvények, egyszerű események

Adott a Duna Budapestnél centiméterben mért vízállása 2024. január 1 és 2024. szeptember 16. között. (forrás: hydroinfo.hu).

1. Add meg hónaponként a vízállások minimumát, maximumát és átlagát.

2. Add meg a mért időszak teljes minimumát, maximumát, átlagát.

3. a) Add meg azoknak a hónapoknak a neveit, amelyekben a vízszint minden méréskor 230cm fölött volt. (tipp: segédváltozók, nyugodtan számolj több lépésben)
   b) Add meg azoknak a hónapoknak a neveit, amelyekben a vízszint minden méréskor az input mezőben levő érték fölött volt.
   Elég, ha a lista gombnyomásra frissül... (tipp: typeof)

4. Bizonyos vízszint-értékek mellett fokozott árvízvédelemre kell készülni.
   Sorold be a mért vízállás értékeket az alábbiaknak megfelelően:
   -> "green", ha a vízállás kisebb az éves átlag-vízállás 80%-ánál.
   -> "orange", ha a vízállás az éves vízállás 80%-a és 120%-a között áll.
   -> "red", ha a vízállás nagyobb az éves vízállás 120%-ánál

Elvárt kimenet:

```js
[
  [
    { water_level: 199, warning: "green" },
    { water_level: 876, warning: "red" } /*, ...*/,
  ],
  [
    /*...*/
  ],
  // .
  // .
  // .
];
```

A tömbök tömbjében vett objektum tehát az alábbi formát öltse (a property-k nevére figyelj!!):

```js
{
"water_level": number,
"warning": "green" | "orange" | "red"
}
```
