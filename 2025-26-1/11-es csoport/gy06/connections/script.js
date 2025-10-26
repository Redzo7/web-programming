import { displayPage, init_navigation } from "./navigation.js";
import { data } from "./data.js";
import { delegate, generate_grid, update_lives, add_guessed, update_time, clearWords } from "./utils.js";

// Pages
const main_page = document.querySelector("div#main_page");
const game_page = document.querySelector("div#game_page");
const results_page = document.querySelector("div#results_page");

// Components
const shuffle_button = document.querySelector("#game_page #shuffle");
const deselect = document.querySelector("#game_page #deselect");
const submit = document.querySelector("#game_page #submit");
const name_input = document.querySelector("#main_page #name");
const start_button = document.querySelector("#main_page #start");
const scoretable = document.querySelector("#results_page table");

// Initialize
displayPage(main_page);
init_navigation();
let game_index = 0;
let selected_ids = [];
let guessed_categories = [];
let scoreboard = JSON.parse(localStorage.getItem("scores")) ?? [];
let seconds = 0;

let lives = 4;
update_lives(lives);
// setTimeout -- késleltetés
// setInterval -- függvényt ismételt futtatása ("timer")
let timer = setInterval(() => {
    seconds++;
    update_time(seconds);
}, 1000);

start_button.addEventListener("click", () => { 
    lives = 4;
    update_lives();

    selected_ids = [];
    guessed_categories = [];

    clearInterval(timer);
    seconds = 0;

    clearWords();
    start(); 
})

generate_grid( data[game_index] );

delegate(game_page, ".game_word", "click", (event, elem) => {
    const id = Number(elem.dataset.word_id);

    // let ids_uniq = Array.from(new Set(selected_ids));
    // Remove any reoccurring values in a list

    if( selected_ids.length < 4 && !selected_ids.includes(id) )
    {
        selected_ids.push( id );
        elem.classList.add("selected");
    }
    else if(selected_ids.includes(id))
    {
        selected_ids = selected_ids.filter(value => value != id);
        elem.classList.remove("selected");
    }
})

function deselect_all()
{
    const selectedList = Array.from(document.querySelectorAll(".selected"));
    selectedList.forEach(elem => {
        elem.classList.remove("selected");
    })

    selected_ids = [];
}

deselect.addEventListener("click", (__, _) => {
    deselect_all();
});

submit.addEventListener("click", (event, elem) => {
    // Uniq ids
    let ids_uniq = Array.from(new Set(selected_ids));
    if(ids_uniq.length != 4)
        return;

    // always an array with 4 elems
    const selected_word_obj = data[game_index].filter(elem => selected_ids.includes(elem.id));
    const is_correct = selected_word_obj.every(elem => elem.category === selected_word_obj[0].category)

    if(is_correct)
    {
        
        const category = selected_word_obj[0].category;

        if(!guessed_categories.includes(category))
            guessed_categories.push(category);

        const selectedList = Array.from(document.querySelectorAll(".selected"));
        selectedList.forEach(elem => {
            elem.classList.add("guessed");
        })

        deselect_all();

        add_guessed(selected_word_obj);

        if(guessed_categories.length == 4)
        {
            finalize_game();
        }
    }
    else // Lost game
    {
        lives = lives-1;
        update_lives(lives);

        if(lives == 0)
        {
            restart();
        }
    }
})

shuffle_button.addEventListener("click", (event, elem) => {
    const shuffled = data[game_index];
    deselect_all();
    

    shuffled.sort((a, b) => Math.random()-0.5)
    generate_grid(shuffled);
});

function finalize_game()
{
    clearInterval(timer);
    const username = name_input.value;
    
    scoreboard.push(
        {
            name: username,
            time: seconds,
            game_id: game_index
        }
    )


    localStorage.setItem("scores", JSON.stringify(scoreboard));
    /*
    localStorage.setItem();
    localStorage.getItem();
    localStorage.clear();

    JSON.stringify();
    JSON.parse();
    */

    displayPage(results_page);
    generate_scoreboard();
}

function restart()
{
    lives = 4;
    update_lives();

    selected_ids = [];
    guessed_categories = [];

    clearInterval(timer);
    seconds = 0;

    clearWords();
    displayPage(main_page);
}

function start()
{
    game_index = Math.floor(Math.random()* data.length );
    generate_grid( data[game_index] );

    timer = setInterval(() => {
        seconds++;
        update_time(seconds);
    }, 1000);

}

function generate_scoreboard()
{
    scoretable.innerHTML = '';

    scoreboard.forEach((elem) => {
        const tr = document.createElement("tr");

        const name = document.createElement("td");
        const time = document.createElement("td");
        const game_id = document.createElement("td");

        name.innerText = elem.name;
        time.innerText = elem.time;
        game_id.innerText = elem.game_id;

        tr.appendChild(name);
        tr.appendChild(time);
        tr.appendChild(game_id);

        scoretable.appendChild(tr);
    })

}

// TODO: after guessing category, shuffle allows reselect
// TODO: scoreboard to localStorage (setItem, getItem, clear)
// JSON.stringify, JSON.parse
// TODO: display scoreboard