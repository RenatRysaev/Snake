import { Types } from "../../types";
import { Domain } from "../../domain";
import { Constants } from "../../constants";
import { IEventEmitter } from "../event-emitter";

export interface IEngine {
  start(): void;
  stop(): void;
}

type EngineProps = {
  EventEmitter: IEventEmitter;
  Snake: Domain.ISnake;
  Food: Domain.IFood;
  GameScore: Domain.IGameScore;
};

export class Engine implements IEngine {
  private readonly EventEmitter: IEventEmitter;

  private readonly Snake: Domain.ISnake;
  private readonly Food: Domain.IFood;
  private readonly GameScore: Domain.IGameScore;

  private runId: NodeJS.Timeout | null = null;

  constructor(props: EngineProps) {
    this.EventEmitter = props.EventEmitter;

    this.Snake = props.Snake;
    this.Food = props.Food;
    this.GameScore = props.GameScore;

    this.EventEmitter.subscribe({
      eventType: Types.EventType.StartGame,
      subscriber: this.start,
    });

    this.EventEmitter.subscribe({
      eventType: Types.EventType.StopGame,
      subscriber: this.stop,
    });
  }

  public start = () => {
    this.initialize();
    this.run();
  };

  public run = () => {
    this.tick();

    this.runId = setInterval(() => {
      this.run();

      if (this.runId) {
        clearInterval(this.runId);
      }
    }, 1000);
  };

  public stop = () => {
    if (this.runId) {
      clearInterval(this.runId);
    }

    this.gameOver();
  };

  private tick = () => {
    console.log("tick", this);
    this.render();

    if (this.hasIntersectionBySnakeAndBorder()) {
      this.gameOver();
    }

    if (this.hasIntersectionBySnakeAndFood()) {
      this.Snake.moveByDirection();
      this.Snake.increase();
      this.Food.generateNew(this.Snake.getCoordinates());
      this.GameScore.increase();
      return;
    }

    this.Snake.moveByDirection();
  };

  private render = () => {
    this.EventEmitter.emit({
      type: Types.EventType.Render,
      payload: this.Snake,
    });

    this.EventEmitter.emit({
      type: Types.EventType.Render,
      payload: this.Food,
    });
  };

  private initialize() {
    this.Food.generateNew(this.Snake.getCoordinates());
  }

  // TODO: кажется, что эти методы надо вынести в отдельные классы с логикой змеи
  private hasIntersectionBySnakeAndBorder = (): boolean => {
    const snakeHeadCoordinates = this.Snake.getCoordinates()[0];

    const hasIntersectionByX =
      snakeHeadCoordinates.x < 0 &&
      snakeHeadCoordinates.x > Constants.GAME_CANVAS_SIZE.width;

    const hasIntersectionByY =
      snakeHeadCoordinates.y < 0 &&
      snakeHeadCoordinates.y > Constants.GAME_CANVAS_SIZE.height;

    return hasIntersectionByX || hasIntersectionByY;
  };

  private hasIntersectionBySnakeAndFood = (): boolean => {
    const snakeHeadCoordinates = this.Snake.getCoordinates()[0];
    const foodCoordinates = this.Food.getCoordinates()[0];

    return (
      snakeHeadCoordinates.x === foodCoordinates.x &&
      snakeHeadCoordinates.y === foodCoordinates.y
    );
  };

  private gameOver = () => {};
}
