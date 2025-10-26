const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// ================= Game loop =====================

const state = {
  x: 0,
  y: 0,
  radius: 25,
}

const velocity = 10;

context.lineWidth = 3;
context.strokeStyle = "black";

// Time-based animation (from the lecture slide)
let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function update(dt) {
  state.x = state.x + velocity*dt;
  state.y = state.y + velocity*dt;
}

function render() {
  /// CLEAR!!
  context.clearRect(0,0, 500,500)
  context.beginPath();
  context.arc(state.x, state.y, state.radius, 0, 2*Math.PI);
  context.stroke();
}

// Start the loop
next(); 