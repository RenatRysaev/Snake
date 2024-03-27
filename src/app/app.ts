import { Constants } from "../constants";
import { Types } from "../types";
import { Controllers } from "../controllers";
import { UseCases } from "../use-cases";

const initialize = () => {
  const eventEmitter = new UseCases.EventEmitter();
  const snake = new UseCases.Snake({
    EventEmitter: eventEmitter,
    direction: Types.Direction.Right,
    coordinates: new UseCases.SnakeCoordinates([
      { x: 10, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 50, y: 10, direction: Types.Direction.Right },
    ]),
  });
  const food = new UseCases.Food();
  const gameScore = new UseCases.GameScore();
  const engine = new UseCases.Engine({
    EventEmitter: eventEmitter,
    Snake: snake,
    Food: food,
    GameScore: gameScore,
  });

  console.log("initialized", engine);

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
    gameCanvasElement.style.width = `${Constants.GAME_CANVAS_SIZE.width}px`;
    gameCanvasElement.style.height = `${Constants.GAME_CANVAS_SIZE.height}px`;
    rootElement.appendChild(gameCanvasElement);
  }
};

initialize();

/*
 * Задачи:
 * 1) реализовать класс змеи(ок)
 * 2) реализовать класс еды(необходимо генерировать еду в случайном месте, в пределах игрового поля и исключая координаты змеи)
 * 3) релизовать класс канваса и отрисовку всего на поле(необходимо каким-то образом подписаться на изменения координат змеи и еды и рисовать их)
 * 4) реализовать класс движка, логику работы игры
 * 5) реализовать класс UI, который будет иметь методы с отрисовкой начального экрана, экрана с концом игры, экрана с паузой, обновления счетчика очков
 * */
