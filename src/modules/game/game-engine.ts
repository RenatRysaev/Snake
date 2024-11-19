import { Shared } from "../../shared";
import { Snake } from "../snake";
import { Food } from "../food";
import { Display } from "../display";
import { Score } from "../score";
import * as Utils from "./utils";
import { EventEmitter } from "../event-emitter";

type Props = {
  eventEmitter: EventEmitter;
  snake: Snake;
  food: Food;
  display: Display;
  score: Score;
};

export class GameEngine {
  private readonly eventEmitter: EventEmitter;
  private runId: NodeJS.Timeout | null = null;
  private snake: Snake;
  private food: Food;
  private display: Display;
  private score: Score;

  constructor(props: Props) {
    this.eventEmitter = props.eventEmitter;
    this.snake = props.snake;
    this.food = props.food;
    this.display = props.display;
    this.score = props.score;
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

    this.eventEmitter.emit({
      eventId: Shared.Types.EventId.GameOver,
      payload: {
        score: this.score.getResult(),
      },
    });
  };

  private tick = () => {
    this.calculateCoordinates();
    this.resolveCollisions();
    this.renderCoordinates();
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

    const hasCollisionWithFood = Utils.checkCollision(snakeCoordinates, [
      foodCoordinates,
    ]);
    if (hasCollisionWithFood) {
      this.food.remove();
      this.snake.increase();
      this.score.increase();
    }

    const snakeHead = snakeCoordinates[0];
    const snakeTail = snakeCoordinates.slice(1);

    const hasCollisionWithSnake = Utils.checkCollision(snakeTail, [snakeHead]);
    if (hasCollisionWithSnake) {
      this.stop();
    }

    const hasCollisionWithBorders = Utils.checkCollisionWithBorders(snakeHead);
    if (hasCollisionWithBorders) {
      this.stop();
    }
  };

  private renderCoordinates = () => {
    this.display.render(this.snake.getCoordinates(), {
      color: Shared.Constants.SNAKE_COLOR,
      removePreviousRender: true,
    });

    if (this.food.hasCoordinates()) {
      this.display.render(this.food.getCoordinates(), {
        color: Shared.Constants.FOOD_COLOR,
      });
    }
  };
}
