import { UseCases } from "../use-cases";
import { Types } from "../types";

export interface IGameController {
  handleStartGame(): void;
  handlePauseGame(): void;
  handleStopGame(): void;
}

type GameControllerProps = {
  EventEmitter: UseCases.IEventEmitter;
};

export class GameController implements IGameController {
  private readonly EventEmitter;

  constructor(props: GameControllerProps) {
    this.EventEmitter = props.EventEmitter;
  }

  public handleStartGame = () => {
    this.EventEmitter.emit({ type: Types.EventType.StartGame });
  };

  public handlePauseGame = () => {};

  public handleStopGame = () => {
    this.EventEmitter.emit({ type: Types.EventType.StopGame });
  };
}
