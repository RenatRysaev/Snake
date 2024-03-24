import { Domain } from "../../domain";

export class GameScore implements Domain.IGameScore {
  public increase() {}

  public getResult(): number {
    return 777;
  }
}
