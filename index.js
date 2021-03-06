const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButRef = document.querySelector('button[data-action="start"]');
const stopButRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.body;

startButRef.addEventListener("click", onClickBtn);
stopButRef.addEventListener("click", offClickBtn);

let intervalId;

function onClickBtn() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startButRef.disabled = true;
}

function offClickBtn() {
  clearInterval(intervalId);
  startButRef.disabled = false;
}
