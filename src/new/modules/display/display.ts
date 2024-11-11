import { Shared } from "../../shared";

type RenderOptions = {
  removePreviousRender?: boolean;
};

type Props = {
  HTMLCanvasElement: HTMLCanvasElement;
};

export class Display {
  private readonly pixelSize: number = 10;
  private canvasRenderingContext: CanvasRenderingContext2D;

  constructor(props: Props) {
    const canvasRenderingContext = props.HTMLCanvasElement.getContext("2d");

    if (!canvasRenderingContext) {
      throw new Error(
        "Display.constructor: Не найден CanvasRenderingContext2D",
      );
    }

    this.canvasRenderingContext = canvasRenderingContext;
  }

  public render = (
    coordinates: Shared.Types.PositionType[],
    options?: RenderOptions,
  ): void => {
    if (options?.removePreviousRender) {
      this.clearDisplay();
    }

    coordinates.forEach((coordinate) => {
      this.canvasRenderingContext.fillStyle = "rgb(55, 112, 177)";
      this.canvasRenderingContext.fillRect(
        coordinate.x,
        coordinate.y,
        this.pixelSize,
        this.pixelSize,
      );
    });
  };

  private clearDisplay = (): void => {
    this.canvasRenderingContext.clearRect(0, 0, 10000, 10000);
  };
}
