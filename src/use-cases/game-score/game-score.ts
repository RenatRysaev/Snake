import { Domain } from "../../domain";

export class GameScore implements Domain.IGameScore {
  private score: number;

  constructor() {
    this.score = 0;
  }

  public increase() {
    this.score += 1;
  }

  public getScore(): number {
    return this.score;
  }
}
