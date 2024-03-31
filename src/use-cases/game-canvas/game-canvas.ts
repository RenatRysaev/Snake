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

    const indexToColor = {
      0: "silver",
      1: "yellow",
      2: "red",
      3: "orange",
      4: "green",
    };

    if (ctx) {
      // ctx.fillStyle = Constants.SNAKE_COLOR;

      coordinates.forEach(({ x, y }, index) => {
        const fillStyle = indexToColor[index] || "black";
        // console.log("fillStyle", fillStyle);
        ctx.fillStyle = fillStyle;
        ctx.fillRect(x, y, Constants.PIXEL_SIZE, Constants.PIXEL_SIZE);
      });
    }
  };

  public delete(coordinates: Types.ICoordinates) {
    const ctx = this.Canvas.getContext("2d");

    if (ctx) {
      console.log("delete", coordinates.x, coordinates.y);
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
