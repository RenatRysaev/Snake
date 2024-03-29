import { GameScore } from "./game-score.ts";

describe("Class GameScore", () => {
  it('Method "increase" should increment score counter', () => {
    const gameScore = new GameScore();
    gameScore.increase();
    gameScore.increase();
    gameScore.increase();

    expect(gameScore.getScore()).toEqual(3);
  });
});
