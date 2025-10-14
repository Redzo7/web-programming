const game_page = document.querySelector("div#game_page");

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

export {delegate, generate_grid};