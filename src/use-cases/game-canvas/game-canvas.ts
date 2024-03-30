import { Domain } from "../../domain";
import { Types } from "../../types";
import { Constants } from "../../constants";
import { IEventEmitter } from "../event-emitter";

type GameCanvasProps = {
  EventEmitter: IEventEmitter;
  Canvas: HTMLCanvasElement;
};

export class GameCanvas implements Domain.IGameCanvas {
  private readonly EventEmitter: IEventEmitter;
  private readonly Canvas: HTMLCanvasElement;

  constructor(props: GameCanvasProps) {
    this.EventEmitter = props.EventEmitter;
    this.Canvas = props.Canvas;

    this.EventEmitter.subscribe({
      eventType: Types.EventType.DrawOnCanvas,
      subscriber: this.handleDraw,
    });

    this.EventEmitter.subscribe({
      eventType: Types.EventType.DeleteOnCanvas,
      subscriber: this.handleDelete,
    });
  }

  public draw = (coordinates: Types.ICoordinates[]): void => {
    console.log("draw", coordinates);
    const ctx = this.Canvas.getContext("2d");

    if (ctx) {
      coordinates.forEach(({ x, y }) => {
        ctx.fillStyle = Constants.SNAKE_COLOR;
        ctx.fillRect(x, y, Constants.PIXEL_SIZE, Constants.PIXEL_SIZE);
      });
      ctx.closePath();
    }
  };

  public delete(coordinates: Types.ICoordinates) {
    const ctx = this.Canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(
        coordinates.x,
        coordinates.y,
        Constants.PIXEL_SIZE,
        Constants.PIXEL_SIZE,
      );
    }
  }

  private handleDraw = (event: Types.Event<Types.ICoordinates[]>) => {
    if (event.payload) {
      this.draw(event.payload);
    }
  };

  private handleDelete = (event: Types.Event<Types.ICoordinates>) => {
    if (event.payload) {
      this.delete(event.payload);
    }
  };
}
