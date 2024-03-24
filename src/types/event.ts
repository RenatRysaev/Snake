export enum EventType {
  StartGame = "StartGame",
  StopGame = "StopGame",
  ReplaceFood = "ReplaceFood",
}

export type Payload = { [key: string]: unknown };

export interface Subscriber {
  (payload: Payload): void;
}

export type Event = {
  type: EventType;
  payload?: Payload;
};
