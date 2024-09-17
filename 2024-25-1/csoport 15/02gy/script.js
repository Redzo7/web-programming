let my_arr = [1,2,3]
console.log(my_arr);

const my_fun = () => 0;
console.log(typeof my_fun)

const my_obj = {
  prop1: 15,
  prop2: "asd",
  prop3: (p) => 2*p,
  "prop4": [1,2,"asd"]
}

console.log(my_obj.prop3(2));

/*
  push(35) végére hozzáad
  pop() végéről elvenni
  shift() elejéről elvenni
  unshift(35) elejére beszúrni
*/

const person = {
  name: "Irma",
  age: 27,
  fave_numbers: [2,6,9,10]
}

function kivalogat(arr){
  const result = [];
  for (const elem of arr) {
    if(elem % 2 == 1)
    {
      result.push(elem)
    }
  }

  return result;
}

function kivalogat2(arr, callback){
  const result = [];
  for (const elem of arr) {
    if(callback(elem))
    {
      result.push(elem)
    }
  }

  return result;
}

console.log(kivalogat(person.fave_numbers))
console.log(
  kivalogat2(person.fave_numbers, (p) => p % 2 == 0)
);

console.log(my_arr.filter(v => v < 3))

// Tömbfüggvények
/*
some    (eldöntés):         [ x,x,x... ] --> bool
every   (opt. eldöntés):    [ x,x,x... ] --> bool
map     (másolás):          [ x,x,x... ] --> [ y,y,y... ]
filter  (kiválogatás):      [ x,x,x... ] --> [ x,x,x... ]
reduce  (összegzés!!):      [ x,x,x... ] --> y
find    (keresés):          [ x,x,x... ] --> x | undefined (ha nincs ilyen elem)
findIndex (keresés):        [ x,x,x... ] --> number (ha nincs ilyen elem -1)

// Max és min kiválasztás
Math.min(x,x,x,x,x) --> x       minimumkiválasztás
Math.max(x,x,x,x,x) --> x       maximumkiválasztás

...array --> nem tömbként vesszük az array változót, hanem mintha az elemeit vesszővel írtuk volna le.
*/

my_arr.forEach((e => {
  console.log(2*e)
}));

console.log(my_arr.map(e => e*2))

const numbers = [3, 4, 6, 1, 46, -23, 77, 0, 4, 12];
const sport_people = [
  { name: "Focista", age: 23, pets: ["kacsa", "liba" /*...*/] },
  { name: "Labdarúgó", age: 54, pets: ["liba", "liba" /*...*/] },
  { name: "Kézilabdázó", age: 18, pets: ["kutya", "nyúl", "kutya" /*...*/] },
  { name: "Curlingező", age: 20, pets: ["cica", "nyúl" /*...*/] },
  { name: "Röplabdázó", age: 32, pets: ["kacsa", "liba", "sólyom" /*...*/] },
];

// sum = görgeti maga előtt, az eddigi számok összegét tartalmazza
console.log(
  numbers.reduce(
    (sum, currentValue) => sum + currentValue,
    0
  )
)

console.log(
  sport_people.reduce(
    (sum, currentValue) => sum + currentValue["age"],
    0
  )
)

console.log(
  "number of liba:",
  sport_people.reduce(
    (sum, currentObj) => sum + currentObj.pets.filter(pet => pet == "liba").length,
    0
  )
)

console.log(
  Array.from(new Set(sport_people.map(person => person.pets).flat()))
)

const people = [
  {
    "name": "Emma",
    "grade": 3,
    "eye_color": "blue",
    "visited_countries": ["France", "Germany"]
  },
  {
    "name": "Liam",
    "grade": 5,
    "eye_color": "brown",
    "visited_countries": ["Italy"]
  },
  {
    "name": "Olivia",
    "grade": 2,
    "eye_color": "green",
    "visited_countries": ["Indonesia"]
  },
  {
    "name": "Noah",
    "grade": 4,
    "eye_color": "hazel",
    "visited_countries": ["Italy", "Germany", "Netherlands"]
  },
  {
    "name": "Ava",
    "grade": 3,
    "eye_color": "gray",
    "visited_countries": ["Japan", "South Korea"]
  },
  {
    "name": "Elijah",
    "grade": 2,
    "eye_color": "green",
    "visited_countries": ["Germany"]
  },
  {
    "name": "Sophia",
    "grade": 5,
    "eye_color": "brown",
    "visited_countries": ["Australia", "New Zealand"]
  },
  {
    "name": "James",
    "grade": 4,
    "eye_color": "green",
    "visited_countries": []
  },
  {
    "name": "Isabella",
    "grade": 3,
    "eye_color": "hazel",
    "visited_countries": ["Netherlands", "Argentina"]
  },
  {
    "name": "Benjamin",
    "grade": 2,
    "eye_color": "green",
    "visited_countries": ["New Zealand", "Cuba", "South Korea"]
  }
]

/*
1. Hány olyan ember van a listában, akinek van 'a' betű a nevében?
2. Mennyi a listában levő emberek jegyeinek összege? És átlaga?
3. Kik azok az emberek a listában, aki zöld szemű és nem járt Indonéziában ("Indonesia")?
4. Kik azok az emberek a listában, aki 2-nél több országban járt?
5. Kik azok az emberek a listában, aki 1-nél több olyan országban járt, aminek a neve több szóból áll?
6. Mely országokban jártak a listában levő emberek? (ismétlődés nélkül)
*/

// 1
console.log(
  people.filter( personObj => personObj.name.includes("a") || personObj.name.includes("A")).length
);

// 2
const sum = people.reduce((sum, current) => sum + current.grade, 0);
console.log(sum, sum / people.length)

// 3
console.log(
  people
    .filter(
      (person) =>
        person.eye_color == "green" &&
        !person.visited_countries.includes("Indonesia")
    )
    .map((person) => person.name)
);

// 4.
console.log(
  people
    .filter((person) => person.visited_countries.length > 2)
    .map((person) => person.name)
);

// 5.
console.log(
  people
    .filter((person) => 
      person.visited_countries.filter((country) => 
        country.includes(" ")
    ).length > 1
  ).map(person => person.name)
)

// 6. 
console.log(
  Array.from(new Set(people.map(person => person.visited_countries).flat()))
)


////////////////////////////////////////////////

const outputSpan = document.querySelector("#output");
const helloButton = document.querySelector("#greetBtn");

helloButton.addEventListener("click", greetUser);
function greetUser() {
  const nameInput = document.querySelector("#name");
  console.log(nameInput.value)
  outputSpan.innerText = `Hello ${nameInput.value}`;
}