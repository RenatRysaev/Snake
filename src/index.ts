import { App } from "./modules/app";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Не найден rootElement");
}

const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;

if (!canvasElement) {
  throw new Error("Не найден canvasElement");
}

rootElement.appendChild(canvasElement);

const app = new App({ elements: { canvas: canvasElement } });

console.log("App created", app);
