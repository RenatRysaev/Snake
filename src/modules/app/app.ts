import { Shared } from "../../shared";
import { EventEmitter } from "../event-emitter";
import { Controller } from "../controller";
import { Game } from "../game";
import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";
import { Score } from "../score";
import { View } from "../view";
import { initialSnakeCoordinates } from "./app.constants.ts";

type Props = {
  elements: {
    canvas: HTMLCanvasElement;
    startGameButton: HTMLButtonElement;
    startScreen: HTMLDivElement;
    endScreen: HTMLDivElement;
    scoreElement: HTMLSpanElement;
  };
};

export class App {
  private readonly eventEmitter: EventEmitter;
  public readonly controller: Controller;
  public readonly game: Game;
  public readonly snake: Snake;
  public readonly food: Food;
  public readonly display: Display;
  public readonly score: Score;
  public readonly view: View;

  constructor(props: Props) {
    this.eventEmitter = new EventEmitter();
    this.controller = new Controller({
      eventEmitter: this.eventEmitter,
    });

    this.snake = new Snake({
      eventEmitter: this.eventEmitter,
      direction: Shared.Types.Direction.Right,
      coordinates: initialSnakeCoordinates,
    });

    this.food = new Food();

    this.display = new Display({
      canvas: props.elements.canvas,
    });

    this.score = new Score();

    this.game = new Game({
      eventEmitter: this.eventEmitter,
      snake: this.snake,
      food: this.food,
      display: this.display,
      score: this.score,
    });

    this.view = new View({
      eventEmitter: this.eventEmitter,
      controller: this.controller,
      elements: props.elements,
    });
  }
}
