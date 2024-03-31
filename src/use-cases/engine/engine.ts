import { Types } from "../../types";
import { Domain } from "../../domain";
import { IEventEmitter } from "../event-emitter";
import { ISnakeUtils } from "./snake-utils.ts";

export interface IEngine {
  start(): void;
  stop(): void;
}

type EngineProps = {
  EventEmitter: IEventEmitter;
  Snake: Domain.ISnake;
  SnakeUtils: ISnakeUtils;
  Food: Domain.IFood;
  GameScore: Domain.IGameScore;
};

export class Engine implements IEngine {
  private readonly EventEmitter: IEventEmitter;
  private readonly Snake: Domain.ISnake;
  private readonly SnakeUtils: ISnakeUtils;
  private readonly Food: Domain.IFood;
  private readonly GameScore: Domain.IGameScore;
  private runId: NodeJS.Timeout | null = null;

  constructor(props: EngineProps) {
    this.EventEmitter = props.EventEmitter;

    this.Snake = props.Snake;
    this.SnakeUtils = props.SnakeUtils;
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
    }, 5000);
  };

  public stop = () => {
    if (this.runId) {
      clearInterval(this.runId);
    }

    this.gameOver();
  };

  private tick = () => {
    if (this.SnakeUtils.hasIntersectionWithBorder()) {
      this.gameOver();
      return;
    }

    // TODO: сделать, чтобы getCoordinates у еды возвращал объект, а не массив, поскольку координаты это все 1 объект
    const foodCoordinates = this.Food.getCoordinates()[0];

    if (this.SnakeUtils.hasIntersectionWithFood(foodCoordinates)) {
      this.Snake.increase();
      this.GameScore.increase();
      this.SnakeUtils.moveAndDraw();
      this.Food.generateNew(this.Snake.getCoordinates());
      return;
    }

    this.SnakeUtils.moveAndDraw();
  };

  private initialize() {
    this.Food.generateNew(this.Snake.getCoordinates());
  }

  private gameOver = () => {};
}
