// Navbar elements
const navBar = document.querySelector("nav");
const startNav = document.querySelector("#startNav");
const statsNav = document.querySelector("#statsNav");
const promptNav = document.querySelector("#promptNav");

// Container elements
const gameContainer = document.querySelector("#gameContainer");
const statsContainer = document.querySelector("#statsContainer");
const promptContainer = document.querySelector("#promptContainer");

// Start game container elements
const gameInitDiv = gameContainer.querySelector("#init");
const gameFrameDiv = gameContainer.querySelector("#game");
const gameTimerDiv = gameContainer.querySelector("#timer");

const gameStartGameButton = gameContainer.querySelector("#startButton");
const gameUsernameInput = gameContainer.querySelector("#username");

const targetTextDiv = gameContainer.querySelector("#targetText");
const textarea = gameContainer.querySelector("#inputTextarea");

// Stats
const recordTable = statsContainer.querySelector("table");

// Globals
let username = "Anonymous";
let selectedTextIndex;
let seconds_played = 0;
let game_timer;

const defaultTexts = [
    "A tavasz első napsugarai ébresztették fel a kertben a virágokat, amelyek színpompás szirmokkal köszöntötték a napot. A madarak vidám csiviteléssel telepedtek a fák ágaira, mintha versenyt énekeltek volna. Az egész táj újraéledt, ahogy a természet felkészült a meleg hónapokra.",
    "A kisfiú boldogan szaladt végig a parkon, kezében egy színes léggömböt tartva, amely a szélben vidáman lengett. Közben a nap sugarai csillogtak a tó vizén, ahol kacsák úszkáltak. Ahogy elérte a játszóteret, nevetése messzire hallatszott.",
    "Az esőcseppek lassan koppantak az ablakon, miközben odakint a szél lágyan ringatta a fák ágait. A táj szürke ködbe burkolózott, és a város csendes nyugalommal várta, hogy elálljon az eső. Bent a házban a kandalló pattogó tüze melegséggel töltötte be a szobát.",
    "A kiscica kíváncsian nézett körül a szobában, felfedezve minden kis zugot, ahová eddig nem merészkedett. Apró tappancsaival halk neszeket keltett a parkettán, miközben egy guruló gombolyagot követett. Ahogy egyre bátrabban mozgott, farka izgatottan remegett.",
    "A hegyek fölött komor felhők gyülekeztek, és a táj csendben készült a közelgő viharra. A levegő nehéz volt, mintha maga a természet visszatartaná a lélegzetét. Hirtelen villám hasította ketté az eget, és rögtön utána megdördült a mennydörgés."
];

// Record list from local storage
let record = JSON.parse(localStorage.getItem("record"));
if(!record) // Always make sure to check for null !!!
{
    record = [];
    localStorage.setItem("record", JSON.stringify([]));
}


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

// update the div content showing the time spent on playing
const updateTime = () => {
    gameTimerDiv.innerText = `${seconds_played} sec`;
}

// Generate the table on displaying the stats page
statsNav.addEventListener("click", () => {
    recordTable.innerHTML = "";
    record.forEach(rec => {
        const trElem = document.createElement("tr");

        let tdElem = document.createElement("td");
        tdElem.innerText = rec.username;
        trElem.appendChild(tdElem);

        tdElem = document.createElement("td");
        tdElem.innerText = rec.seconds;
        trElem.appendChild(tdElem);

        recordTable.appendChild(trElem);
    });
});

// Initialize a nev game
const prepareGame = () => {
    // Flush the textarea value
    textarea.value = "";

    // Save the given username
    if(gameUsernameInput.value == "")
    {
        username = "Anonymous";
    }
    else
    {
        username = gameUsernameInput.value
    }

    // Display game, and relevant components
    gameInitDiv.style.display = "none";
    gameFrameDiv.style.display = "block";
    gameTimerDiv.style.display = "block";

    // Select and display the text
    selectedTextIndex = Math.floor(Math.random() * defaultTexts.length);
    targetTextDiv.innerText = defaultTexts[selectedTextIndex];

    // Start the timer
    seconds_played = 0;
    updateTime();

    // setInterval(callback, ms):
    // * callback: mit csináljon
    // * ms: milyen gyakran (millisec)

    // setTimeout(callback, ms):
    // * callback: mit csináljon
    // * ms: mennyi időt várjon, mielőtt megcsinálja (millisec)
    // megj: tulajdonképpen késleltetés
    game_timer = setInterval(() => {
        seconds_played++;
        updateTime();
    }, 1000);
}

// On game end, save the result and congratulate the user.
const finalizeResults = () => {
    // Always stop the timer!!!
    clearInterval(game_timer);

    record.push({
        username: username,
        seconds: seconds_played
    });

    // stringify the object before save !!!
    localStorage.setItem("record", JSON.stringify(record));

    gameContainer.style.display = "none";
    alert(`Congrats ${username}, you passed in ${seconds_played} seconds`);
}

gameStartGameButton.addEventListener("click", prepareGame);

// on every change of the textarea
textarea.addEventListener("input", event => {
    const inputValue = textarea.value;
    const targetText = defaultTexts[selectedTextIndex];

    // Check if ended
    if(inputValue == targetText)
    {
        finalizeResults();
    }

    // Search for the first character that is incorrect
    let index = 0;
    while(index < inputValue.length && inputValue[index] == targetText[index])
    {
        index++;
    }

    // Distribute the text into 3 sections:
    // 1: 0 - first incorrect character = correctly typed
    // 2: first incorrect character - typed text length = incorrectly typed
    // 3. remaining text
    const correctPart = targetText.substring(0, index);
    const incorrectPart = targetText.substring(correctPart.length, inputValue.length);
    const remaining = targetText.substring(inputValue.length);

    // innerHTML, because we manipulate tags, and give them a class
    targetTextDiv.innerHTML = 
        `<span class="correct">${correctPart}</span><span class="incorrect">${incorrectPart}</span>${remaining}`;
});

// Hide the irrelevant pages and revert the Start page to setup phase.
const hidePages = () => {
    gameContainer.style.display = "none";
    statsContainer.style.display = "none";
    promptContainer.style.display = "none";

    // Start page
    gameInitDiv.style.display = "block";
    gameFrameDiv.style.display = "none";
    gameTimerDiv.style.display = "none";
}

// Fill dataset for navigation
const initDatasets = () => {
    startNav.dataset.containerQuery = "#gameContainer";
    statsNav.dataset.containerQuery = "#statsContainer";
    promptNav.dataset.containerQuery = "#promptContainer";
}

// Reveal the given page
const revealPage = (page) => {
    page.style.display = "block";
}

// Handle navigation actions
delegate(navBar, "li", "click", (event, elem) => {
    hidePages();

    const pageElem = document.querySelector(elem.dataset.containerQuery);
    revealPage(pageElem);
});

initDatasets();
hidePages();