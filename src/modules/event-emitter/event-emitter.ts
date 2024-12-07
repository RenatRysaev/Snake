import {
  Event,
  Listeners,
  ListenerDetails,
  EventNames,
} from "./event-emitter.types.ts";

export class EventEmitter {
  private readonly listeners: Listeners = {};

  public on = <T extends EventNames>(
    subscribeDetails: ListenerDetails<T>,
  ): void => {
    const { name, subscriber } = subscribeDetails;

    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name]?.push(subscriber);
  };

  public emit = <T extends EventNames>(event: Event<T>): void => {
    const listenersByEventType = this.listeners[event.name];

    if (listenersByEventType) {
      listenersByEventType.forEach((listener) => {
        listener(event as any);
      });
    }
  };
}
