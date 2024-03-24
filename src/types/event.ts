export enum EventType {
  StartGame = "StartGame",
  StopGame = "StopGame",
  GenerateNewFood = "GenerateNewFood",
  Render = "Render",
}

// TODO: сделать Payload дженериком, чтобы была возможность его типизировать

export type Payload = { [key: string]: unknown };

export interface Subscriber {
  (payload: Payload): void;
}

export type Event = {
  type: EventType;
  payload?: Payload;
};
