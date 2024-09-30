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

const testObject = {
  "name": "Janika",
  "id": 12,
  "eye_color": "red"
}

export { delegate, testObject }