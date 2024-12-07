import { EventEmitter } from "../event-emitter";

import { MAP_KEY_CODE_TO_SNAKE_DIRECTION } from "./controller.constants.ts";

type Props = {
  eventEmitter: EventEmitter;
};

export class Controller {
  private eventEmitter: EventEmitter;

  constructor(props: Props) {
    this.eventEmitter = props.eventEmitter;
  }

  public handleChangeSnakeDirection = (keyCode: string): void => {
    const direction = MAP_KEY_CODE_TO_SNAKE_DIRECTION[keyCode];

    if (direction) {
      this.eventEmitter.emit({
        name: "change-snake-direction",
        payload: {
          direction,
        },
      });
    }
  };

  public handleStartGame = (): void => {
    this.eventEmitter.emit({
      name: "start-game",
    });
  };
}
