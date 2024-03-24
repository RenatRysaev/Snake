import { Types } from "../../types";
import { IEventEmitter } from "../event-emitter";
import { Domain } from "../../domain";

export interface IEngine {
  run(): void;
  stop(): void;
}

type EngineProps = {
  EventEmitter: IEventEmitter;
  Snake: Domain.ISnake;
};

export class Engine implements IEngine {
  private readonly EventEmitter: IEventEmitter;
  private readonly Snake: Domain.ISnake;

  private runId: NodeJS.Timeout | null = null;

  constructor(props: EngineProps) {
    this.EventEmitter = props.EventEmitter;

    this.Snake = props.Snake;

    this.EventEmitter.subscribe({
      eventType: Types.EventType.StartGame,
      subscriber: this.run,
    });

    this.EventEmitter.subscribe({
      eventType: Types.EventType.StopGame,
      subscriber: this.stop,
    });
  }

  public run = () => {
    this.runLogic();

    this.runId = setInterval(() => {
      this.run();
    }, 60);
  };

  public stop = () => {
    if (this.runId) {
      clearInterval(this.runId);
    }
  };

  private runLogic = () => {
    this.Snake.moveByDirection();
    /* логика работы змеи:
     * 1) если впереди стена - завершить игру
     * 2) если впереди корм - удалить его и увеличиться, переместиться по направлению движения, а так же увеличить счетчик очков
     * 3) если впереди ничего нету, переместиться по направлению движения
     * */
  };
}
