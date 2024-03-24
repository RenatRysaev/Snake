import { Domain } from "../../domain";
import { Types } from "../../types";
import { IEventEmitter } from "../event-emitter";

type GameCanvasProps = {
  EventEmitter: IEventEmitter;
};

export class GameCanvas implements Domain.IGameCanvas {
  private readonly EventEmitter: IEventEmitter;

  constructor(props: GameCanvasProps) {
    this.EventEmitter = props.EventEmitter;

    this.EventEmitter.subscribe({
      eventType: Types.EventType.Render,
      subscriber: this.render,
    });
  }

  public render = (
    payload: Types.Payload<{ canvasSubject: Types.ICanvasSubject }>,
  ) => {
    const { canvasSubject } = payload;
    console.log("should render", canvasSubject);
  };
}
