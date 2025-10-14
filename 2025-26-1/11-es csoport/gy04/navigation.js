// Pages
const main_page = document.querySelector("div#main_page");
const game_page = document.querySelector("div#game_page");
const result_page = document.querySelector("div#results_page");

// Components
const start_button = document.querySelector("#main_page #start");
const back_to_menu_button = document.querySelector("#game_page #back");

function displayPage(page) // Node -> void
{
    main_page.style.display = "none";
    game_page.style.display = "none";
    result_page.style.display = "none";

    if(page != null)
    {
        page.style.display = "block";
    }
}

function init_navigation()
{
    start_button.addEventListener('click', (event, elem) => {
        displayPage(game_page);
    });

    back_to_menu_button.addEventListener('click', (event, elem) => {
        displayPage(main_page);
    })
}

export {displayPage, init_navigation};