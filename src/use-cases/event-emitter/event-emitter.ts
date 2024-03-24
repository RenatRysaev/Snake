import { Types } from "../../types";

type SubscribeDetails = {
  eventType: Types.EventType;
  subscriber: Types.Subscriber;
};

export interface IEventEmitter {
  subscribe(subscribeDetails: SubscribeDetails): void;
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

  public subscribe = (subscribeDetails: SubscribeDetails) => {
    const { eventType, subscriber } = subscribeDetails;

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
