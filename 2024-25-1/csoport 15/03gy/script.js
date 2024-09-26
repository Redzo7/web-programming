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

const peopleTableBodyElement = document.querySelector("#peopleData tbody");
people.forEach(person => {
  const trElem = document.createElement("tr");

  
  // feltölteni tartalommal
  for (const key in person) {
    // 1.
    const tdElem = document.createElement("td");
    
    // 2.
    tdElem.id = key;
    tdElem.innerText = person[key];

    // 3. 
    trElem.appendChild(tdElem);
  }
  /*
  let tdElem = document.createElement("td");
  // 2.
  tdElem.innerText = person["name"];
  // 3. 
  trElem.appendChild(tdElem);

  tdElem = document.createElement("td");
  //... az összes többi attributumra
  */

  peopleTableBodyElement.appendChild(trElem);

  // 1. létrehozni az elemünket
  // 2. feltölteni adattal, tartalommal
  // 3. hozzáadjuk az oldal elemei közé, hogy megjelenjen
});

function isEven(num)
{
  return num % 2 == 0;
}

function isBlackChessCell(row, col)
{
  return (
    (isEven(row) && !isEven(col)) ||
    (!isEven(row) && isEven(col))
  );
}

function generateChessBoard()
{
  const chessTable = document.querySelector("#chessBoard");

  for(let row = 0; row < 8; row++)
  {
    const trElem = document.createElement("tr");

    for(let col = 0; col < 8; col++)
    {
      const tdElem = document.createElement("td");

      if(isBlackChessCell(row, col))
      {
        tdElem.classList.add("blackBg");
      }

      tdElem.dataset.col = col;
      tdElem.dataset.row = row;
      // mielőtt "inicializálnánk" undefined

      trElem.appendChild(tdElem);
    }

    chessTable.appendChild(trElem);
  }
}

//generateChessBoard();

function generateList(minValue)
{
  const ulElem = document.querySelector("#personList");
  ulElem.innerHTML = "";

  people.forEach(person => {
    if(minValue <= person.visited_countries.length)
    {
      const liElem = document.createElement("li");

      const starText = person.visited_countries.map(_ => "*").join("")
      liElem.innerText = `${person.name} ${starText}`;
  
      ulElem.appendChild(liElem);
    }
  });
}

generateList(0);

const rangeElem = document.querySelector("#countryFilter");
rangeElem.max = Math.max(...people.map(person => person.visited_countries.length));

rangeElem.addEventListener("input", event => {
  const rangeSpan = document.querySelector("#rangeValue");
  rangeSpan.innerText = event.target.value;

  const currentValue = event.target.value;
  generateList(currentValue);
});

delegate(peopleTableBodyElement, "tr", "click", (event, elem) => {
  /*
  if(elem.classList.contains("selectedRow"))
  {
    elem.classList.remove("selectedRow");
  }
  else
  {
    elem.classList.add("selectedRow");
  }
  */
  /*
  // csak egy jelenjen meg
  document.querySelectorAll(".selectedRow").forEach(elem => {
    elem.classList.remove("selectedRow");
  });
  */

  elem.classList.toggle("selectedRow");
  const selectedRows = peopleTableBodyElement.querySelectorAll(".selectedRow #grade");
  const gradeSum = Array.from(selectedRows).reduce((sum, elem) => sum + parseInt(elem.innerText), 0);
  console.log(gradeSum);
  const avg = gradeSum / selectedRows.length;
  document.querySelector("#gradeAvg").innerText = `Avg = ${isNaN(avg) ? "-" : avg}`
});


const water_level = [
  [527,472,443,429,452,458,466,486,511,496,469,437,402,374,341,318,299,287,283,293,328,323,301,286,298,321,381,407,438,427,398],
  [368,349,334,322,310,305,326,338,332,330,347,363,388,397,387,370,354,334,312,319,321,324,338,328,340,358,368,356,343],
  [317,304,292,279,265,262,250,245,248,248,232,228,234,260,267,252,245,239,244,255,263,273,269,276,260,258,256,256,250,245,252],
  [240,238,248,273,280,275,262,250,253,260,270,276,270,248,234,236,266,296,308,294,289,286,283,280,278,271,270,251,232,229],
  [242,244,245,256,255,255,244,242,267,288,305,294,270,253,243,239,236,242,256,262,261,262,269,315,320,321,310,297,292,298,323],
  [332,353,433,515,552,586,621,645,641,622,614,618,610,584,534,480,439,411,403,398,385,390,397,394,399,384,366,354,358,354],
  [346,329,349,369,362,341,305,283,280,326,313,287,293,312,354,352,328,304,291,285,273,268,256,249,264,271,271,257,238,214,211],
  [203,197,195,207,214,214,210,203,192,189,194,180,159,148,153,172,178,177,172,179,225,282,266,247,223,198,175,172,174,174,163],
  [155,151,139,128,128,132,127,130,128,122,137,189,205,234,345,474]
]

const waterTable = document.querySelector("#water_level");
const avgs = water_level.map(datas => {
  const sumLevels = datas.reduce((sum, current) => sum+current, 0);
  return sumLevels / datas.length;
})

const trElem = document.createElement("tr");

avgs.forEach( monthData => {
  const tdElem = document.createElement("td");
  tdElem.innerText = monthData;
  trElem.appendChild(tdElem);
})

waterTable.appendChild(trElem);