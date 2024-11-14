import { Shared } from "../../shared";

type Subscriber = (payload: any) => void;
type Subscribers = {
  [key in Shared.Types.EventId]?: Subscriber[];
};

type SubscribeDetails = {
  eventId: Shared.Types.EventId;
  subscriber: Subscriber;
};

export class EventEmitter {
  private readonly subscribers: Subscribers = {};

  public subscribe = (subscribeDetails: SubscribeDetails): void => {
    const { eventId, subscriber } = subscribeDetails;

    this.subscribers[eventId] = [
      ...(this.subscribers[eventId] ?? []),
      subscriber,
    ];
  };

  public emit = (event: Shared.Types.Event): void => {
    const subscribersByEventType = this.subscribers[event.id];

    if (subscribersByEventType) {
      subscribersByEventType.forEach((subscriber) => {
        subscriber(event);
      });
    }
  };
}
