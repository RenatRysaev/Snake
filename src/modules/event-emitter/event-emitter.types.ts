import { EventTypes } from "./event-emitter.event-types.ts";

export type EventNames = keyof EventTypes;

export type Listener<T extends EventNames> = EventTypes[T];

export type Listeners = {
  [key in EventNames]?: Listener<key>[];
};

type GetPayloadParams<ListenerType> = ListenerType extends (params: {
  payload: infer Payload;
}) => void
  ? Payload extends object
    ? Payload
    : undefined
  : never;

export type Event<
  EventName extends EventNames,
  Payload = GetPayloadParams<Listener<EventName>>,
> = Payload extends undefined
  ? {
      name: EventName;
    }
  : {
      name: EventName;
      payload: Payload;
    };

export type ListenerDetails<T extends EventNames> = {
  name: T;
  subscriber: Listener<T>;
};
