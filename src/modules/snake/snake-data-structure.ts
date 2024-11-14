import { Shared } from "../../shared";

type Props = {
  items: Shared.Types.PositionLogType[];
};

export class SnakeDataStructure {
  private items: Props["items"];

  constructor(props: Props) {
    this.items = [...props.items];
  }

  public insertInHead(coordinates: Shared.Types.PositionLogType): void {
    this.items.unshift(coordinates);
  }

  public insertInEnd(coordinates: Shared.Types.PositionLogType): void {
    this.items.push(coordinates);
  }

  public deleteLastItem(): void {
    this.items.pop();
  }

  public getHead(): Shared.Types.PositionLogType {
    return this.items[0];
  }

  public getEnd(): Shared.Types.PositionLogType {
    return this.items[this.items.length - 1];
  }

  public getItems(): Shared.Types.PositionLogType[] {
    return this.items;
  }
}
