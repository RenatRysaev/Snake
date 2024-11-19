import { Shared } from "../../shared";
import { Snake } from "../snake";
import { Food } from "../food";
import { GameEngine } from "./game-engine.ts";
import { Display } from "../display";
import { Score } from "../score";
import { EventEmitter } from "../event-emitter";

type Props = {
  eventEmitter: EventEmitter;
  snake: Snake;
  food: Food;
  display: Display;
  score: Score;
};

export class Game {
  private readonly eventEmitter: EventEmitter;
  private engine: GameEngine;

  constructor(props: Props) {
    this.eventEmitter = props.eventEmitter;
    this.engine = new GameEngine(props);

    this.eventEmitter.subscribe({
      eventId: Shared.Types.EventId.StartGame,
      subscriber: this.start,
    });
  }

  private start = (): void => {
    this.engine.run();
  };
}
