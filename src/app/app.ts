import { Controllers } from "../controllers";
import { UseCases } from "../use-cases";

const eventEmitter = new UseCases.EventEmitter();

const gameController = new Controllers.GameController({
  EventEmitter: eventEmitter,
});

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

/*
 * Задачи:
 * 1) реализовать класс змеи
 * 2) реализовать класс еды
 * 3) релизовать класс канваса и отрисовку всего на поле
 * 4) реализовать класс движка, логику работы игры
 * */
