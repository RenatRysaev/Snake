import { Shared } from "../../shared";
import { SnakeEngine } from "./snake-engine.ts";
import { EventEmitter } from "../event-emitter";

type Props = {
  eventEmitter: EventEmitter;
  direction: Shared.Types.Direction;
  coordinates: Shared.Types.PositionLogType[];
};

export class Snake {
  private eventEmitter: EventEmitter;
  private engine: SnakeEngine;

  constructor(props: Props) {
    this.eventEmitter = props.eventEmitter;
    this.engine = new SnakeEngine(props);

    this.eventEmitter.subscribe({
      eventType: Shared.Types.EventType.ChangeSnakeDirection,
      subscriber: this.setDirection,
    });
  }

  public setDirection = (direction: Shared.Types.Direction): void => {
    this.engine.setDirection(direction);
  };

  public getDirection = (): Shared.Types.Direction => {
    return this.engine.getDirection();
  };

  public move = (): void => {
    this.engine.move();
  };

  public increase = (): void => {
    this.engine.increase();
  };

  public getCoordinates = (): Shared.Types.PositionLogType[] => {
    return this.engine.getCoordinates();
  };
}
