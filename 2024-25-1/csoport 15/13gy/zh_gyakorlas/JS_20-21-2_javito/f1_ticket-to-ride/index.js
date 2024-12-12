const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')

// task1
let kobenhavn_rec;
console.log(cities);
for(const key in cities)
{
    if(cities[key].city == 'Kobenhavn')
    {
        kobenhavn_rec = cities[key];
        break;
    }
}


task1.innerText = `${kobenhavn_rec.today}, ${kobenhavn_rec.country}`;

// task2
/*
 "1": {
    "id":"1",
    "city":"Amsterdam",
    "today":"Amsterdam",
    "country":"Holland",
    "x":31.874999999999996,
    "y":30.58161350844278
    },
*/
const relevant_cities = [];
for(const key in cities)
{
    if(between(30, 60, cities[key].x) && between(40, 60, cities[key].y))
    {
        relevant_cities.push(cities[key]);
    }
}
console.log(relevant_cities)
const text = relevant_cities.map(city => city.city).join(',');
task2.innerText = text;

function between(a,b, value) {return a <= value && value <= b; }

// task3

const green_lines = [];
for (const key in connections) {
    if(connections[key].color == "green") green_lines.push(connections[key]);
}

task3.innerText = green_lines.every(line => line.elements.length >= 2);