import { Shared } from "../../shared";
import { SnakeEngine } from "./snake-engine.ts";

type Props = {
  direction: Shared.Types.Direction;
  coordinates: Shared.Types.PositionLogType[];
};

export class Snake {
  private engine: SnakeEngine;

  constructor(props: Props) {
    this.engine = new SnakeEngine({
      direction: props.direction,
      coordinates: props.coordinates,
    });
  }

  public setDirection = (direction: Shared.Types.Direction): void => {
    this.engine.setDirection(direction);
  };

  public getDirection = (): Shared.Types.Direction => {
    return this.engine.getDirection();
  };

  public move = (): void => {
    this.engine.handleMove();
  };

  public increase = (): void => {
    this.engine.handleIncrease();
  };

  public getCoordinates = (): Shared.Types.PositionLogType[] => {
    return this.engine.getCoordinates();
  };
}
