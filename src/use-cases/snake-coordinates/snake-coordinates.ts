import { Types } from "../../types";

export interface ISnakeCoordinates {
  insertInHead(coordinates: Types.ICoordinates): void;
  deleteLastItem(): void;
  getItems(): Types.ICoordinates[];
  head(): Types.ICoordinates;
}

export class SnakeCoordinates implements ISnakeCoordinates {
  private readonly coordinates: Types.ICoordinates[];

  constructor(coordinates: Types.ICoordinates[]) {
    this.coordinates = [...coordinates];
  }

  public insertInHead(coordinates: Types.ICoordinates) {
    this.coordinates.unshift(coordinates);
  }

  public deleteLastItem() {
    this.coordinates.pop();
  }

  public getItems(): Types.ICoordinates[] {
    return this.coordinates;
  }

  public head(): Types.ICoordinates {
    return this.coordinates[0];
  }
}
