import { Snake } from "../snake";
import { Food } from "../food";
import { GameEngine } from "./game-engine.ts";
import { Display } from "../display";
import { Score } from "../score";

type Props = {
  snake: Snake;
  food: Food;
  display: Display;
  score: Score;
};

export class Game {
  private engine: GameEngine;

  constructor(props: Props) {
    this.engine = new GameEngine(props);
  }

  public start = (): void => {
    this.engine.run();
  };

  public stop = (): void => {
    this.engine.stop();
  };
}
