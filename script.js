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
