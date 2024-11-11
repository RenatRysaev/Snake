import { Shared } from "../../shared";
import { EventType } from "../../../types/event.ts";

type Subscriber = (payload: any) => void;
type Subscribers = {
  [key in Shared.Types.EventType]?: Subscriber[];
};

type SubscribeDetails = {
  eventType: Shared.Types.EventType;
  subscriber: Subscriber;
};

type Event = {
  type: EventType;
  payload?: any;
};

export class EventEmitter {
  private readonly subscribers: Subscribers = {};

  public subscribe = (subscribeDetails: SubscribeDetails): void => {
    const { eventType, subscriber } = subscribeDetails;

    this.subscribers[eventType] = [
      ...(this.subscribers[eventType] ?? []),
      subscriber,
    ];
  };

  public emit = (event: Event): void => {
    const subscribersByEventType = this.subscribers[event.type];

    if (subscribersByEventType) {
      subscribersByEventType.forEach((subscriber) => {
        subscriber(event);
      });
    }
  };
}
