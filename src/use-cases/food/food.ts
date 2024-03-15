import { Types } from "../../types";
import { Domain } from "../../domain";

export class Food implements Domain.IFood {
  constructor() {}

  getCoordinates(): Types.ICoordinates[] {}
}
