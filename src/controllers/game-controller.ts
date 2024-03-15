export interface IGameController {
  handleStartGame(): void;
  handlePauseGame(): void;
  handleStopGame(): void;
}

export class GameController implements IGameController {
  handleStartGame = () => {
    console.log("handleStartGame");
  };

  handlePauseGame = () => {};

  handleStopGame = () => {
    console.log("handleStopGame");
  };
}
