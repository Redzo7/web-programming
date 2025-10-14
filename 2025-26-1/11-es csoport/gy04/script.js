import { displayPage, init_navigation } from "./navigation.js";
import { data } from "./data.js";
import { delegate, generate_grid } from "./utils.js";

// Pages
const main_page = document.querySelector("div#main_page");
const game_page = document.querySelector("div#game_page");
const result_page = document.querySelector("div#results_page");

// Components
const start_button = document.querySelector("#main_page #start");
const back_to_menu_button = document.querySelector("#game_page #back");

// Initialize
displayPage(main_page);
init_navigation();
let game_index = 0;
let selected_ids = [];

generate_grid( data[game_index] );

delegate(game_page, ".game_word", "click", (event, elem) => {
    const id = elem.dataset.word_id;

    selected_ids.push(id);
    elem.classList.add("selected");

    console.log(selected_ids);

    // TODO: legyen uniq minden ID ami belekerül
    // TODO: max 4 darab lehessen benne
})