import { Shared } from "../../shared";
import { EventEmitter } from "../event-emitter";
import { Controller } from "../controller";
import * as Utils from "./utils.ts";

type Props = {
  eventEmitter: EventEmitter;
  controller: Controller;
  elements: {
    startGameButton: HTMLButtonElement;
    startScreen: HTMLDivElement;
    endScreen: HTMLDivElement;
    scoreElement: HTMLSpanElement;
  };
};

export class View {
  private readonly eventEmitter: Props["eventEmitter"];
  private readonly controller: Props["controller"];
  private elements: Props["elements"];

  constructor(props: Props) {
    this.eventEmitter = props.eventEmitter;
    this.controller = props.controller;
    this.elements = props.elements;

    this.eventEmitter.subscribe({
      eventId: Shared.Types.EventId.StartGame,
      subscriber: this.handleStartGame,
    });

    this.eventEmitter.subscribe({
      eventId: Shared.Types.EventId.GameOver,
      subscriber: (event: Shared.Types.Event<{ score: number }>) =>
        this.handleStopGame(event.payload.score),
    });

    this.initializeListeners();
  }

  private handleStartGame = (): void => {
    Utils.hideElement(this.elements.startScreen);
  };

  private handleStopGame = (score: number): void => {
    Utils.setContent(this.elements.scoreElement, String(score));
    Utils.showElement(this.elements.endScreen);
  };

  private initializeListeners = (): void => {
    window.addEventListener("keydown", (event) => {
      this.controller.handleChangeSnakeDirection(event.code);
    });

    this.elements.startGameButton.addEventListener("click", () => {
      this.controller.handleStartGame();
    });
  };
}
