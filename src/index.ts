import "./style.css";
import { App } from "./modules/app";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Не найден canvas");
}

const startGameButton = document.getElementById(
  "start-game-button",
) as HTMLButtonElement;
if (!startGameButton) {
  throw new Error("Не найден startGameButton");
}

const startScreen = document.getElementById("start-screen") as HTMLDivElement;
if (!startGameButton) {
  throw new Error("Не найден startScreen");
}

const endScreen = document.getElementById("end-screen") as HTMLDivElement;
if (!endScreen) {
  throw new Error("Не найден endScreen");
}

const scoreElement = document.getElementById("score") as HTMLSpanElement;
if (!scoreElement) {
  throw new Error("Не найден scoreElement");
}

const app = new App({
  elements: {
    canvas,
    startGameButton,
    startScreen,
    endScreen,
    scoreElement,
  },
});

console.log("App created", app);
