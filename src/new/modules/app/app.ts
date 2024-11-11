import { Shared } from "../../shared";

import { Game } from "../game";
import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";

const initialSnakeCoordinates: Shared.Types.PositionLogType[] = [
  { x: 50, y: 10, direction: Shared.Types.Direction.Right },
  { x: 40, y: 10, direction: Shared.Types.Direction.Right },
  { x: 30, y: 10, direction: Shared.Types.Direction.Right },
  { x: 20, y: 10, direction: Shared.Types.Direction.Right },
  { x: 10, y: 10, direction: Shared.Types.Direction.Right },
];

type Props = {
  elements: {
    HTMLCanvas: HTMLCanvasElement;
  };
};

export class App {
  private readonly game: Game;
  private readonly snake: Snake;
  private readonly food: Food;
  private readonly display: Display;

  constructor(props: Props) {
    this.snake = new Snake({
      direction: Shared.Types.Direction.Right,
      coordinates: initialSnakeCoordinates,
    });

    this.food = new Food();

    this.display = new Display({
      HTMLCanvasElement: props.elements.HTMLCanvas,
    });

    this.game = new Game({
      snake: this.snake,
      food: this.food,
      display: this.display,
    });

    this.game.start();
  }
}
