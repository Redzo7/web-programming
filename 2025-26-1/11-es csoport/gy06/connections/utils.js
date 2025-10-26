const game_page = document.querySelector("div#words");
const lives_div = document.querySelector("#game_page #lives");
const guessed = document.querySelector("#game_page #guessed");
const timer_span = document.querySelector("#game_page #timer");

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

function generate_grid(game_object)
{
    game_page.innerHTML = "";
    // format: { word: "...", category: "...", id: 0 }

    for (let i = 0; i < 4; i++) {

        let row_div = document.createElement("div");
        row_div.classList.add("game_row");

        for(let j = 0; j < 4; j++)
        {
            const word_obj = game_object[ i*4 + j ];

            const div_cell = document.createElement("div"); 

            div_cell.classList.add("game_word");
            div_cell.innerText = word_obj.word;
            div_cell.dataset.word_id = word_obj.id;

            row_div.appendChild(div_cell);
        }

        game_page.appendChild(row_div);
    }
}

function update_lives(lives)
{
  let lives_str = "";
  for(let i = 0;i < lives; i++)
  {
    lives_str += "❤️";
  }
  lives_div.innerText = lives_str;
}

function add_guessed(word_obj)
{
  let row_div = document.createElement("div");
  row_div.classList.add("game_row");

  const category = document.createElement("div");
  category.classList.add("game_word");
  category.classList.add("category_name");
  category.classList.add("guessed");
  category.innerText = word_obj[0].category;
  row_div.appendChild(category);

  for(let j = 0; j < 4; j++)
  {
      const word = word_obj[j];
      const div_cell = document.createElement("div"); 
      div_cell.classList.add("game_word");
      div_cell.classList.add("guessed");
      div_cell.innerText = word.word;
      row_div.appendChild(div_cell);
  }
  
  guessed.appendChild(row_div);
}

function update_time(seconds) {
  const minutes =  Math.floor(seconds / 60);
  const seconds_left = seconds % 60;

  timer_span.innerText = `${minutes}:${seconds_left}`;
}

function clearWords()
{
  game_page.innerHTML = "";
}

export {delegate, generate_grid, update_lives, add_guessed, update_time, clearWords};