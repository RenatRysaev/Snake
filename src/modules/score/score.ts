export class Score {
  private result: number = 0;

  public getResult = (): number => {
    return this.result;
  };

  public increase = (): void => {
    this.result += 1;
  };

  public reset = (): void => {
    this.result = 0;
  };
}
