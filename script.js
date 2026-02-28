// Add event listeners for color change on hover
function addListeners() {
  gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      color = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
      cell.style.backgroundColor = color;
    });
  });
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

// Generating new grid
function newGrid() {
  input = getGridSize();

  if (input === null) return;
  gridContainer = document.querySelector("#grid-container");
  clearGrid(gridContainer);
  populateGrid(gridContainer, input);
  addListeners();
}

function getGridSize() {
  const input = prompt("How many squares should the grid be? (max of 100)", 16);
  return (input <= 100 && input > 0) || input === null ? input : getGridSize();
}

function clearGrid(container) {
  container.replaceChildren();
}

function populateGrid(container, number) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < number; i++) {
    const column = document.createElement("div");
    column.classList.add("grid-col");
    console.log("making column ", i);

    for (let j = 0; j < number; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      console.log("making cell ", j, " for column ", i);

      column.append(cell);
    }
    fragment.append(column);
  }
  container.append(fragment);
}

addListeners();
