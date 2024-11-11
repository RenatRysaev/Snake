import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";

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
    }, 1000);
  };

  public stop = () => {
    if (this.runId) {
      clearInterval(this.runId);
    }
  };

  private tick = () => {
    this.calculatingNewCoordinatesForObjects();
    this.resolveCollisions();
    this.renderObjects();
  };

  private calculatingNewCoordinatesForObjects = () => {
    this.snake.move();
    // this.food.generate();
  };

  private resolveCollisions = () => {};

  private renderObjects = () => {
    this.display.render(this.snake.getCoordinates(), {
      removePreviousRender: true,
    });
  };
}
