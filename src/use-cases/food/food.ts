import { Types } from "../../types";
import { Domain } from "../../domain";

export class Food implements Domain.IFood {
  constructor() {}

  public getCoordinates(): Types.ICoordinates[] {
    return [];
  }

  public generateNew() {}
}
