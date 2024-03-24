import { Types } from "../../types";
import { EventEmitter } from "./event-emitter.ts";

describe("Class EventEmitter", () => {
  it("Should notify subscribers by event type", () => {
    const eventEmitter = new EventEmitter();

    const startGameMockSubscriber1 = jest.fn();
    const startGameMockSubscriber2 = jest.fn();
    const stopGameMockSubscriber = jest.fn();

    eventEmitter.subscribe({
      eventType: Types.EventType.StartGame,
      subscriber: startGameMockSubscriber1,
    });
    eventEmitter.subscribe({
      eventType: Types.EventType.StartGame,
      subscriber: startGameMockSubscriber2,
    });
    eventEmitter.subscribe({
      eventType: Types.EventType.StopGame,
      subscriber: stopGameMockSubscriber,
    });

    eventEmitter.emit({ type: Types.EventType.StartGame });
    expect(startGameMockSubscriber1).toHaveBeenCalledTimes(1);
    expect(startGameMockSubscriber2).toHaveBeenCalledTimes(1);

    eventEmitter.emit({ type: Types.EventType.StopGame });
    expect(stopGameMockSubscriber).toHaveBeenCalledTimes(1);
  });

  it("Should not notify subscribers by another event type", () => {
    const eventEmitter = new EventEmitter();
    const mockSubscriber = jest.fn();

    eventEmitter.subscribe({
      eventType: Types.EventType.StartGame,
      subscriber: mockSubscriber,
    });
    eventEmitter.emit({ type: Types.EventType.StopGame });
    expect(mockSubscriber).toHaveBeenCalledTimes(0);
  });
});
