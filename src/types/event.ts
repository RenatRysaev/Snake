// TODO: нужно добавить типизацию под каждое событие, чтобы пользователь понимал что от него ждут
export enum EventType {
  StartGame = "StartGame",
  StopGame = "StopGame",
  DrawOnCanvas = "DrawOnCanvas",
  DeleteOnCanvas = "DeleteOnCanvas",
  ChangeSnakeDirection = "ChangeSnakeDirection",
}

export type Payload<PayloadType> = PayloadType;

export type Subscriber = (payload: Payload<any>) => void;

export type Event<PayloadType> = {
  type: EventType;
  payload?: PayloadType;
};
