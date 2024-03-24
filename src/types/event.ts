export enum EventType {
  StartGame = "StartGame",
  StopGame = "StopGame",
  GenerateNewFood = "GenerateNewFood",
  Render = "Render",
}

export type Payload<PayloadType> = { [key: string]: PayloadType };

export type Subscriber = (payload: Payload<any>) => void;

export type Event<PayloadType> = {
  type: EventType;
  payload?: PayloadType;
};
