import { UseCases } from "../use-cases";
import { Types } from "../types";

export interface ISnakeController {
  handleChangeDirection(keyCode: string): void;
}

type SnakeControllerProps = {
  EventEmitter: UseCases.IEventEmitter;
};

const MAP_KEY_CODE_TO_SNAKE_DIRECTION = {
  ["ArrowLeft"]: Types.Direction.Left,
  ["ArrowUp"]: Types.Direction.Up,
  ["ArrowRight"]: Types.Direction.Right,
  ["ArrowDown"]: Types.Direction.Down,
} as const;

export class SnakeController implements ISnakeController {
  private readonly EventEmitter: UseCases.IEventEmitter;

  constructor(props: SnakeControllerProps) {
    this.EventEmitter = props.EventEmitter;
  }

  public handleChangeDirection(keyCode: string) {
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
