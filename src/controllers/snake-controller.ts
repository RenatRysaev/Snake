import { UseCases } from "../use-cases";
import { Types } from "../types";

export interface ISnakeController {
  handleChangeDirection(keyCode: number): void;
}

type SnakeControllerProps = {
  EventEmitter: UseCases.IEventEmitter;
};

const MAP_KEY_CODE_TO_SNAKE_DIRECTION = {
  [37]: Types.Direction.Left,
  [38]: Types.Direction.Top,
  [39]: Types.Direction.Right,
  [40]: Types.Direction.Down,
} as const;

export class SnakeController implements ISnakeController {
  private readonly EventEmitter: UseCases.IEventEmitter;

  constructor(props: SnakeControllerProps) {
    this.EventEmitter = props.EventEmitter;
  }

  public handleChangeDirection(keyCode: number) {
    if (
      Object.keys(MAP_KEY_CODE_TO_SNAKE_DIRECTION).includes(String(keyCode))
    ) {
      const direction =
        MAP_KEY_CODE_TO_SNAKE_DIRECTION[
          keyCode as keyof typeof MAP_KEY_CODE_TO_SNAKE_DIRECTION
        ];

      this.EventEmitter.emit({
        type: Types.EventType.ChangeSnakeDirection,
        payload: direction,
      });
    }
  }
}
