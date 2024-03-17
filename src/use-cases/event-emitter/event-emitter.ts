import { Types } from "../../types";

export interface IEventEmitter {
  subscribe(eventType: Types.EventType, callback: Types.Subscriber): void;
  emit(event: Types.Event): void;
}

type Subscribers = {
  [key in Types.EventType]?: Types.Subscriber[];
};

export class EventEmitter implements IEventEmitter {
  private readonly subscribers: Subscribers;

  constructor() {
    this.subscribers = {};
  }

  public subscribe = (
    eventType: Types.EventType,
    subscriber: Types.Subscriber,
  ) => {
    this.subscribers[eventType] = [
      ...(this.subscribers[eventType] ?? []),
      subscriber,
    ];
  };

  public emit = (event: Types.Event) => {
    const subscribersByEventType = this.subscribers[event.type];

    if (subscribersByEventType) {
      subscribersByEventType.forEach((subscriber) => {
        subscriber(event);
      });
    }
  };
}
