function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
      let eventTarget = event.target;
      let eventHandler = this;
      let closestChild = eventTarget.closest(child);
 
      if (eventHandler.contains(closestChild)) {
        what(event, closestChild);
      }
    }
 
    parent.addEventListener(when, eventHandlerFunction);
}

// REDUCE
// Minimumkeresés
const test_arr = [1,2,3,4,5,-5]; 

// Reduce függvény:
// - tömbre értelmezett
// - paraméterek:
// -- callback függvény: paraméter: 
// --- "görgetett érték" (ami a visszatérési érték lesz)
// --- aktuális érték, az adott iterációban
// --- a tömb, amin fut a tömbfüggvény
// --- visszatérési értéke: elmentődik a "görgetett érték" változóban (alábbi példán a min változó)
// -- görgetett érték kezdeti értéke (inicializációs érték)
// - példák: tömbök tömbje "lapítása", minimum-maximum keresés, számokból álló tömb elemeinek összeadása
const v_min = test_arr.reduce((min, current) => min > current ? current : min, test_arr[0]);
const v_max = test_arr.reduce((max, current) => max < current ? current : max, test_arr[0]);

const button = document.querySelector('#helloBtn');
const nameInput = document.querySelector('#name');

// button.addEventListener('click', greet);
// nameInput.addEventListener('change', greet)
nameInput.addEventListener('input', greet)

function greet() {
    const targetSpan = document.querySelector('#targetSpan');

    targetSpan.innerHTML = `Hello ${nameInput.value}`;
}

// 1. feladat
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

// step 1: find output element
const peopleTable = document.querySelector('#people tbody');

// step 2: generate data
for (const person of data) {
    // create element
    const trElem = document.createElement('tr');

    // fill with data
    for (const key in person) {
        const tdElem = document.createElement('td');

        // 2. feladat - számozatlan lista
        if( typeof person[key] == 'object' )
        {
            const ulElem = document.createElement('ul');

            for (const country of person[key]) {
                const listElement = document.createElement('li');

                listElement.innerText = country;

                ulElem.appendChild(listElement);
            }

            tdElem.appendChild(ulElem);
        }
        else
        {
            tdElem.innerText = person[key];
        }
        
        

        trElem.appendChild(tdElem);
    }

    // append to parent as child
    peopleTable.appendChild(trElem);
}

// 3. feladat - Sakktábla
const chessBoard = document.querySelector('#chess');

for (let row = 0; row < 8; row++) {
    const trElem = document.createElement('tr');

    for(let col = 0; col < 8; col++)
    {
        const tdElem = document.createElement('td');

        if( (row + col) % 2 == 0 )
            tdElem.classList.add('black');
            // ___.classList.add('classname')
            // ___.classList.remove('classname')
            // ___.classList.toggle('classname', condition *opcionalis* )  

        tdElem.dataset.row = row;
        tdElem.dataset.col = col;
        tdElem.addEventListener('click', () => {
            console.log(
                tdElem.dataset,
                tdElem.dataset.row, // STRING!!
                Number(tdElem.dataset.row),
                Number(tdElem.dataset.col)
            )
        })
        

        trElem.appendChild(tdElem);
    }

    chessBoard.appendChild(trElem);
}

delegate(chessBoard, 'td.black', 'click', (event, elem) => {
    console.log("delegáltam.");
    console.log(event, elem);
    console.log(elem.dataset.row, elem.dataset.col);
    console.log(elem.parentNode.parentNode);
})