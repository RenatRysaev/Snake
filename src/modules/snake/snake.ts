import { Shared } from "../../shared";
import { SnakeEngine } from "./snake-engine.ts";
import { EventEmitter } from "../event-emitter";
import { oppositeDirections } from "./constants.ts";

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
      eventId: Shared.Types.EventId.ChangeSnakeDirection,
      subscriber: (
        event: Shared.Types.Event<{ direction: Shared.Types.Direction }>,
      ) => this.handleChangeSnakeDirection(event.payload.direction),
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

  public getCoordinates = (): Shared.Types.PositionType[] => {
    return this.engine
      .getCoordinates()
      .map((item) => ({ x: item.x, y: item.y }));
  };

  private handleChangeSnakeDirection = (
    direction: Shared.Types.Direction,
  ): void => {
    const isOppositeDirection =
      oppositeDirections.get(this.getDirection()) === direction;

    if (isOppositeDirection) {
      return;
    }

    this.setDirection(direction);
  };
}
