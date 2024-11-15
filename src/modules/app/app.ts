import { Shared } from "../../shared";
import { EventEmitter } from "../event-emitter";
import { Controller } from "../controller";
import { Game } from "../game";
import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";
import { initialSnakeCoordinates } from "./app.constants.ts";

type Props = {
  elements: {
    canvas: HTMLCanvasElement;
  };
};

export class App {
  private readonly eventEmitter: EventEmitter;
  private readonly controller: Controller;
  private readonly game: Game;
  private readonly snake: Snake;
  private readonly food: Food;
  private readonly display: Display;

  constructor(props: Props) {
    this.eventEmitter = new EventEmitter();
    this.controller = new Controller({
      eventEmitter: this.eventEmitter,
    });

    window.addEventListener("keydown", (event) => {
      this.controller.handleChangeSnakeDirection(event.code);
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

    this.game = new Game({
      snake: this.snake,
      food: this.food,
      display: this.display,
    });

    this.game.start();
  }
}
