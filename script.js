const colorBox = document.getElementById("color-box");
const choicesDiv = document.getElementById("choices");
const result = document.getElementById("result");
const startGameButton = document.getElementById("start-game");

let correctColor = "";

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  result.textContent = "";
  choicesDiv.innerHTML = "";

  correctColor = generateRandomColor();
  colorBox.style.backgroundColor = correctColor;

  const colors = [correctColor];
  for (let i = 0; i < 2; i++) {
    colors.push(generateRandomColor());
  }

  shuffle(colors);

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.textContent = color;
    button.onclick = () => checkAnswer(color);
    choicesDiv.appendChild(button);
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    result.textContent = "Correct!";
    result.className = "correct";
  } else {
    result.textContent = "Wrong! Try again.";
    result.className = "wrong";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

startGameButton.onclick = startGame;

