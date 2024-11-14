import { Shared } from "../../shared";

type RenderOptions = {
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
    coordinates: Shared.Types.PositionType[],
    options?: RenderOptions,
  ): void => {
    if (options?.removePreviousRender) {
      this.clear();
    }

    this.renderingContext.fillStyle = Shared.Constants.SNAKE_COLOR;

    coordinates.forEach((coordinate) => {
      this.renderingContext.fillRect(
        coordinate.x,
        coordinate.y,
        Shared.Constants.PIXEL_SIZE,
        Shared.Constants.PIXEL_SIZE,
      );
    });
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
