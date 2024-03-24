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
      eventType: Types.EventType.Render,
      subscriber: this.render,
    });
  }

  public render = (
    payload: Types.Payload<{ canvasSubject: Types.ICanvasSubject }>,
  ) => {
    const coordinates = payload.canvasSubject.getCoordinates();
    const ctx = this.Canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, Constants.PIXEL_SIZE, Constants.PIXEL_SIZE);

      ctx.fillStyle = Constants.SNAKE_COLOR;

      coordinates.forEach(({ x, y }) => {
        ctx.fillRect(x, y, Constants.PIXEL_SIZE, Constants.PIXEL_SIZE);
      });
    }
  };
}
