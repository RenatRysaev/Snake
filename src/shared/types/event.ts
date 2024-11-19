export enum EventId {
  StartGame = "StartGame",
  GameOver = "GameOver",
  ChangeSnakeDirection = "ChangeSnakeDirection",
}

type Payload = { [key: string]: any };

export type Event<T = Payload> = {
  eventId: EventId;
  payload?: T;
};
