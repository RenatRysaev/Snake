export enum EventId {
  StartGame = "StartGame",
  StopGame = "StopGame",
  DrawOnCanvas = "DrawOnCanvas",
  DeleteOnCanvas = "DeleteOnCanvas",
  ChangeSnakeDirection = "ChangeSnakeDirection",
}

type Payload = { [key: string]: any };

export type Event<T = Payload> = {
  id: EventId;
  payload: T extends undefined ? undefined : T;
};
