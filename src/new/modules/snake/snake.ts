import { Shared } from "../../shared";
import { SnakeEngine } from "./snake-engine.ts";

type Props = {
  direction: Shared.Types.Direction;
  coordinates: Shared.Types.PositionLogType[];
};

export class Snake {
  private engine: SnakeEngine;

  constructor(props: Props) {
    this.engine = new SnakeEngine(props);
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
