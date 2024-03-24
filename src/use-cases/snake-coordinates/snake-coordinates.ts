import { Types } from "../../types";

export interface ISnakeCoordinates {
  insertInHead(coordinates: Types.ICoordinatesWithDirection): void;
  insertInEnd(coordinates: Types.ICoordinatesWithDirection): void;
  deleteLastItem(): void;
  getItems(): Types.ICoordinatesWithDirection[];
  head(): Types.ICoordinatesWithDirection;
  end(): Types.ICoordinatesWithDirection;
}

export class SnakeCoordinates implements ISnakeCoordinates {
  private readonly coordinates: Types.ICoordinatesWithDirection[];

  constructor(coordinates: Types.ICoordinatesWithDirection[]) {
    this.coordinates = [...coordinates];
  }

  public insertInHead(coordinates: Types.ICoordinatesWithDirection) {
    this.coordinates.unshift(coordinates);
  }

  public insertInEnd(coordinates: Types.ICoordinatesWithDirection) {
    this.coordinates.push(coordinates);
  }

  public deleteLastItem() {
    this.coordinates.pop();
  }

  public getItems(): Types.ICoordinatesWithDirection[] {
    return this.coordinates;
  }

  public head(): Types.ICoordinatesWithDirection {
    return this.coordinates[0];
  }

  public end(): Types.ICoordinatesWithDirection {
    return this.coordinates[this.coordinates.length - 1];
  }
}
