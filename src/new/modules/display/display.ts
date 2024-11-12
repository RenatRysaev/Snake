import { Shared } from "../../shared";

type RenderOptions = {
  removePreviousRender?: boolean;
};

type Props = {
  canvas: HTMLCanvasElement;
};

export class Display {
  private readonly pixelSize: number = 10;
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
    console.log("coordinates", JSON.parse(JSON.stringify(coordinates)));
    if (options?.removePreviousRender) {
      this.clearDisplay();
    }

    coordinates.forEach((coordinate) => {
      this.renderingContext.fillStyle = "rgb(55, 112, 177)";
      this.renderingContext.fillRect(
        coordinate.x,
        coordinate.y,
        this.pixelSize,
        this.pixelSize,
      );
    });
  };

  private clearDisplay = (): void => {
    this.renderingContext.clearRect(0, 0, 10000, 10000);
  };
}
