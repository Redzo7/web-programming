// Loop

/*
let array = [1,2,3,4,5]
for (let index = 0; index < array.length; index++) {}

for (const key in object) {
    object[key];
}

for (const element of object) {

}

do {
    
} while (condition);

while (condition) {

}
*/

// Objects
const obj = {
    prop1: 15,
    prop2: 15 + 5,
    "prop3": [1, "asd", true],
}

obj["prop4"] = "Laci";

console.log(obj);
console.log(typeof obj);

for (const key in obj) {
    console.log(key, obj[key]);
}

/* TypeError
for (const element of obj) {
    console.log(element);
}
*/

// Functions
function my_fn(param1, param2) {
    console.log("hello from function");
    let a = 5;

    let sum = param1 + param2;
    return sum;
}

const result = my_fn(1,2);
console.log(result);

const arrow_fn = (param1, param2 /*, ...*/) => {
    console.log("hello from function");
    let a = 5;

    let sum = param1 + param2;
    return sum;
} 

const sum_fn = (a, b) => {
    return a + b;
}


console.log(typeof my_fn, typeof arrow_fn);
console.log(sum_fn(5, 3));

const sum_fn_turbo = (a, b) => a + b;
const isEven = (a) => a % 2 == 0;

console.log( isEven(3), isEven(4) );

const swap = (a, b) => {
    let tmp = b;
    b = a;
    a = tmp;
}

var first = 1;
var second = 2;

console.log(first, second);
swap(first, second);
console.log(first, second);

const addParam = (my_obj) => {
    /*
    my_obj = {
        name: "Laci",
        isMinor: (age) => age <= 18,
        age: 25
    }*/
   my_obj["age"] = 25;
}

const my_obj = {
    name: "Laci",
    isMinor: (age) => age <= 18
}

console.log(my_obj);
addParam(my_obj);
console.log(my_obj);

// Arrays

let array = [1,2,3,4,5]
array.forEach( (value, index, array) => {
    console.log(value, index, array);
} 
)

array = [1, 2, 3, 4, 5, 66, 67, 0, -2, -5];

const is_negative = (a) => a<0;
console.log(
    array.every( (value) => value % 2 == 0 ),
    array.every( isEven ),
    array.some( isEven ),
    array.some( is_negative ),
    array.find( is_negative ), // [a,a,a,...] -> a | undefined  
    array.findIndex( is_negative ) // [a,a,a...] -> number (-1 ha nem talál)
)

array.push(25);
console.log(array)
array.pop();
console.log(array)
array.shift()
console.log(array)
array.unshift(25);
console.log(array)

// Tömbfüggvények
const person = {
    name: "Fanni",
    favourite_color: "orange",
    pets: ["snake", "dog", "cat"],
    lottery_numbers: [2, 9, 22, 40, 43]
}

const kivalogat = (arr) => {
    const result = [];
    for (const elem of arr) {
        if(elem % 2 == 0)
        {
            result.push(elem);
        }
    }

    return result;
}

const kivalogat2 = (arr, predicate) => {
    const result = [];
    for (const elem of arr) {
        if( predicate(elem) )
        {
            result.push(elem);
        }
    }

    return result;
}

console.log(
    kivalogat(person.lottery_numbers),
    kivalogat2(person.lottery_numbers, /*(e => e % 2 == 0)*/ isEven ),
    person.lottery_numbers.filter( isEven ),
)

/*

some (eldöntés): [ a, a, a...] --> bool
every ( optimista eldöntés ): [ a, a, a... ] --> bool
map (másolás): [ a, a, a... ] --> [ b, b, b... ]
filter (kiválogatás): [ a, a, a... ] --> [ a, a, a... ] (maximum olyan hosszú, mint az eredeti lista)
reduce (összegzés): [ a, a, a... ] --> y 
find (keresés): [ a, a, a...] --> a | undefined (ha nincs feltételnek megfelelő érték)
findIndex (keresés): [ a, a, a...] --> number (-1, ha nincs feltételnek megfelelő érték)
flat (többdimenziós tömb "lapítása") -> [[a, ...], [b, ...], ...] -> [a,b,...]

*/


// ...arr -- SPREAD operátor (mintha vesszővel elválasztva írnám ki az értékeket, nem tömbként)
console.log(
    Math.min( ...[1,2,3,4,5] )
);
console.log(
    Math.max(...[1,2,3,4,5])
);


const data = [
  {
    "name": "Emily",
    "age": 22,
    "favorite_color": "blue",
    "visited_countries": ["Germany", "France", "Italy"]
  },
  {
    "name": "Jack",
    "age": 35,
    "favorite_color": "red",
    "visited_countries": [
      "Spain",
      "Portugal",
      "France",
      "Germany",
      "Austria",
      "Switzerland",
      "Italy"
    ]
  },
  {
    "name": "Sophia",
    "age": 17,
    "favorite_color": "pink",
    "visited_countries": []
  },
  {
    "name": "Liam",
    "age": 29,
    "favorite_color": "green",
    "visited_countries": ["Norway", "Sweden"]
  },
  {
    "name": "Olivia",
    "age": 41,
    "favorite_color": "purple",
    "visited_countries": ["Italy", "Greece", "Croatia", "Slovenia"]
  },
  {
    "name": "Noah",
    "age": 19,
    "favorite_color": "white",
    "visited_countries": []
  },
  {
    "name": "Ava",
    "age": 27,
    "favorite_color": "blue",
    "visited_countries": ["France", "Belgium", "Luxembourg"]
  },
  {
    "name": "Ethan",
    "age": 36,
    "favorite_color": "green",
    "visited_countries": ["Denmark"]
  },
  {
    "name": "Mia",
    "age": 15,
    "favorite_color": "pink",
    "visited_countries": ["Hungary", "Slovakia", "Poland"]
  },
  {
    "name": "Lucas",
    "age": 24,
    "favorite_color": "red",
    "visited_countries": ["Czech Republic", "Austria"]
  }
]

// Hány kiskorú van a listánkban?
const minors = data.filter( person => person.age < 18 );
console.log(minors, minors.length);

// Kik, akiknek a kék a kedvenc színe?
const blue_likers = data.filter( person => person.favorite_color == "blue" );
console.log(blue_likers); 

// Kik azok a személyek, akiknek a nevében szerepel az 'a' betű?
// Csak a nevek, listaként.
// const people_with_a = data.filter( person => person.name.includes('a') || person.name.includes('A') )
const names_with_a = 
data
    .filter( person => person.name.toLowerCase().includes('a') )
    .map( person => person.name );
console.log(names_with_a);

// Nem kék, járt Olaszban?
const res = 
data
    .filter(person => person.favorite_color != "blue")
    .filter(person => person.visited_countries.includes("Italy") )

console.log(res);

// ...array - spread operator
const nums = [1,2,3,4,5,6];
console.log(
    nums.reduce( (sum, current) => (current % 2 == 0 ? [...sum, current] : sum), [] )
)