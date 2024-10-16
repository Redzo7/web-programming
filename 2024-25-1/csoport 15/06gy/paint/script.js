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

const canvas = document.querySelector("canvas");
const brush = canvas.getContext("2d");

brush.lineWidth = 6;

const prev = {
    x: 0,
    y: 0,
    isClick: false,
}

canvas.addEventListener("mousedown", event => {
    prev.isClick = true;

    prev.x = event.x - canvas.getBoundingClientRect().x;
    prev.y = event.y - canvas.getBoundingClientRect().y;
});

canvas.addEventListener("mouseup", event => {
    prev.isClick = false;
});

canvas.addEventListener("mousemove", event => {
    if(!prev.isClick) return;

    // margin, többi elem miatt 
    const X = event.x - canvas.getBoundingClientRect().x;
    const Y = event.y - canvas.getBoundingClientRect().y;

    brush.beginPath();
        brush.moveTo(prev.x, prev.y);
        brush.lineTo(X, Y);
    brush.stroke();

    prev.x = X;
    prev.y = Y;
});

canvas.addEventListener("mouseleave", event => {
    prev.isClick = false;
})

delegate(document, "td", "click", (event, elem) => {
    Array.from(document.querySelectorAll(".selected")).forEach(selectedElem => {
        selectedElem.classList.remove("selected");
    })
    
    elem.classList.add("selected");
    brush.strokeStyle = elem.dataset.color;
});