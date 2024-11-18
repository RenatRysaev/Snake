import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";
import { Shared } from "../../shared";
import { createKey } from "./utils";

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

  private resolveCollisions = () => {
    const snakeCoordinates = this.snake.getCoordinates();
    const foodCoordinates = this.food.getCoordinates();

    const hasCollisionWithFood = this.checkCollision(snakeCoordinates, [
      foodCoordinates,
    ]);

    if (hasCollisionWithFood) {
      this.food.remove();
      this.snake.increase();
    }
  };

  private renderObjects = () => {
    this.display.render(this.snake.getCoordinates(), {
      color: Shared.Constants.SNAKE_COLOR,
      removePreviousRender: true,
    });
    this.display.render(this.food.getCoordinates(), {
      color: Shared.Constants.FOOD_COLOR,
    });
  };

  private checkCollision = (
    src1: Shared.Types.PositionType[],
    src2: Shared.Types.PositionType[],
  ): boolean => {
    let hasCollision = false;
    const coordinatesMap = new Map<string, Shared.Types.PositionType>();

    src1.forEach((src1Item) => {
      const key = createKey(src1Item);
      coordinatesMap.set(key, src1Item);
    });

    src2.forEach((src2Item) => {
      const key = createKey(src2Item);

      if (coordinatesMap.has(key)) {
        hasCollision = true;
      }
    });

    return hasCollision;
  };
}
