import { Shared } from "../../shared";

type RenderOptions = {
  color: string;
  removePreviousRender?: boolean;
};

type Props = {
  canvas: HTMLCanvasElement;
};

export class Display {
  private renderingContext: CanvasRenderingContext2D;

  constructor(props: Props) {
    const renderingContext = props.canvas.getContext("2d");

    if (!renderingContext) {
      throw new Error("Display.constructor: Не найден renderingContext");
    }

    this.renderingContext = renderingContext;
  }

  public render = (
    coordinates: Shared.Types.PositionType | Shared.Types.PositionType[],
    options: RenderOptions,
  ): void => {
    if (options?.removePreviousRender) {
      this.clear();
    }

    if (coordinates instanceof Array) {
      coordinates.forEach((coordinate) => this.fill(coordinate, options.color));
    } else {
      this.fill(coordinates, options.color);
    }
  };

  private fill = (
    coordinates: Shared.Types.PositionType,
    color: string,
  ): void => {
    this.renderingContext.fillStyle = color;
    this.renderingContext.fillRect(
      coordinates.x,
      coordinates.y,
      Shared.Constants.PIXEL_SIZE - 1,
      Shared.Constants.PIXEL_SIZE - 1,
    );
  };

  private clear = (): void => {
    this.renderingContext.clearRect(
      0,
      0,
      Shared.Constants.GAME_CANVAS_SIZE.width,
      Shared.Constants.GAME_CANVAS_SIZE.height,
    );
  };
}
