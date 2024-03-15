import { Controllers } from "../controllers";

const gameController = new Controllers.GameController();

const rootElement = document.getElementById("app");

if (rootElement) {
  const startGameButton = document.createElement("button");
  startGameButton.onclick = gameController.handleStartGame;
  startGameButton.innerText = "Start game";
  rootElement.appendChild(startGameButton);

  const endGameButton = document.createElement("button");
  endGameButton.onclick = gameController.handleStopGame;
  endGameButton.innerText = "Stop game";
  rootElement.appendChild(endGameButton);

  const gameCanvasElement = document.createElement("canvas");
  gameCanvasElement.style.width = "700px";
  gameCanvasElement.style.height = "700px";
  rootElement.appendChild(gameCanvasElement);
}
