import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";
import { Shared } from "../../shared";

type Props = {
  snake: Snake;
  food: Food;
  display: Display;
};

// логика змеи:
// 1) она всегда двигается
// 2) если она встречает еду - она должны сначала съесть ее, затем увеличиться, так же увеличить счетчик очков
// 3) если она встречает стену - это конец игры
// 4) если она встречает саму себя - это конец игры

// Таким образом псевдокод выглядит так:
// - двигаем змею
// - если встретили стену - завершаем игру
// - если встретили саму себя - завершаем игру
// - если встретили еду - кушаем ее, увеличиваем счетчик
// - генерим еду, если ее съели
// - зациклить

export class GameEngine {
  private runId: NodeJS.Timeout | null = null;
  private snake: Snake;
  private food: Food;
  private display: Display;

  constructor(props: Props) {
    this.snake = props.snake;
    this.food = props.food;
    this.display = props.display;
  }

  public run = () => {
    this.tick();

    this.runId = setInterval(() => {
      this.run();

      if (this.runId) {
        clearInterval(this.runId);
      }
    }, 100);
  };

  public stop = () => {
    if (this.runId) {
      clearInterval(this.runId);
    }
  };

  private tick = () => {
    this.calculateCoordinates();
    this.resolveCollisions();
    this.renderObjects();
  };

  private calculateCoordinates = () => {
    this.snake.move();

    if (!this.food.hasCoordinates()) {
      const snakeCoordinates = this.snake.getCoordinates();
      this.food.generate({ forbiddenCoordinates: snakeCoordinates });
    }
  };

  private resolveCollisions = () => {};

  private renderObjects = () => {
    this.display.render(this.snake.getCoordinates(), {
      color: Shared.Constants.SNAKE_COLOR,
      removePreviousRender: true,
    });
    this.display.render(this.food.getCoordinates(), {
      color: Shared.Constants.FOOD_COLOR,
    });
  };
}
