export class Score {
  private points: number = 0;

  public getPoints = (): number => {
    return this.points;
  };

  public getLevel = (): number => {
    return Math.floor(this.points / 5);
  };

  public increase = (): void => {
    this.points += 1;
  };

  public reset = (): void => {
    this.points = 0;
  };
}
