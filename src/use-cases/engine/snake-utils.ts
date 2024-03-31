import { Domain } from "../../domain";
import { Types } from "../../types";
import { Constants } from "../../constants";
import { IEventEmitter } from "../event-emitter";
import { EventType } from "../../types/event.ts";

type EngineProps = {
  EventEmitter: IEventEmitter;
  Snake: Domain.ISnake;
};

export interface ISnakeUtils {
  moveAndDraw(): void;
  hasIntersectionWithBorder(): boolean;
  hasIntersectionWithFood(foodCoordinates: Types.ICoordinates): boolean;
}

export class SnakeUtils implements ISnakeUtils {
  private readonly EventEmitter: IEventEmitter;
  private readonly Snake: Domain.ISnake;

  constructor(props: EngineProps) {
    this.EventEmitter = props.EventEmitter;
    this.Snake = props.Snake;
  }

  public moveAndDraw = () => {
    // нужно удалять последний элемент на канвасе до того как удалится последний элемент в координатах змеи
    // поскольку drawTailRemoval берет текущий хвост и удаляет его
    // поэтому мы сначала трем хвост на канвасе, а затем вызываем moveByDirection, который внутри себя удаляет хвост как данные
    this.drawTailRemoval();
    this.Snake.moveByDirection();
    this.drawSnakeByCoordinates();
  };

  public hasIntersectionWithFood = (
    foodCoordinates: Types.ICoordinates,
  ): boolean => {
    const snakeHeadCoordinates = this.Snake.getCoordinates()[0];

    return (
      snakeHeadCoordinates.x === foodCoordinates.x &&
      snakeHeadCoordinates.y === foodCoordinates.y
    );
  };

  public hasIntersectionWithBorder = (): boolean => {
    const snakeHeadCoordinates = this.Snake.getCoordinates()[0];

    const hasIntersectionByX =
      snakeHeadCoordinates.x < 0 &&
      snakeHeadCoordinates.x > Constants.GAME_CANVAS_SIZE.width;

    const hasIntersectionByY =
      snakeHeadCoordinates.y < 0 &&
      snakeHeadCoordinates.y > Constants.GAME_CANVAS_SIZE.height;

    return hasIntersectionByX || hasIntersectionByY;
  };

  private drawSnakeByCoordinates = () => {
    const snakeCoordinates = this.Snake.getCoordinates();

    this.EventEmitter.emit({
      type: EventType.DrawOnCanvas,
      payload: snakeCoordinates,
    });
  };

  private drawTailRemoval = () => {
    const tailIndex = this.Snake.getCoordinates().length - 1;
    const tail = this.Snake.getCoordinates()[tailIndex];

    this.EventEmitter.emit({
      type: EventType.DeleteOnCanvas,
      payload: tail,
    });
  };
}
