import { Shared } from "../../shared";

type ListenerArg<PayloadType> = {
  payload: PayloadType;
};
type EmptyListener = () => void;
type ListenerWithPayload<PayloadType> = (arg: ListenerArg<PayloadType>) => void;

export type EventTypes = {
  "start-game": EmptyListener;
  "end-game": ListenerWithPayload<{ score: number }>;
  "change-snake-direction": ListenerWithPayload<{
    direction: Shared.Types.Direction;
  }>;
};
