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
      { x: 50, y: 10, direction: Types.Direction.Right },
      { x: 40, y: 10, direction: Types.Direction.Right },
      { x: 30, y: 10, direction: Types.Direction.Right },
      { x: 20, y: 10, direction: Types.Direction.Right },
      { x: 10, y: 10, direction: Types.Direction.Right },
    ]),
  });
  const food = new UseCases.Food();
  const gameScore = new UseCases.GameScore();
  const engine = new UseCases.Engine({
    EventEmitter: eventEmitter,
    Snake: snake,
    SnakeUtils: new UseCases.SnakeUtils({
      EventEmitter: eventEmitter,
      Snake: snake,
    }),
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

    const gameCanvas = new UseCases.GameCanvas({
      EventEmitter: eventEmitter,
      Canvas: gameCanvasElement,
    });

    const snakeController = new Controllers.SnakeController({
      EventEmitter: eventEmitter,
    });

    window.addEventListener("keydown", (event) => {
      snakeController.handleChangeDirection(event.code);
    });
  }
};

initialize();

/*
 * Задачи:
 * 1) Исправить баг с отрисовкой змеи после изменения направления
 * 2) Выяснить почему не отрисовывается еда
 * 3) Нарисовать на канвасе клеточку, каждая клетка = размер пикселя
 * 3) Реализовать класс UI, который будет иметь методы с отрисовкой начального экрана, экрана с концом игры, экрана с паузой, обновления счетчика очков
 * */
