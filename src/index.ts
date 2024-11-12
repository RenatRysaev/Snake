import { App } from "./new/modules/app";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Не найден rootElement");
}

const canvas = document.createElement("canvas");
canvas.style.width = `500px`;
canvas.style.height = `500px`;
rootElement.appendChild(canvas);

const app = new App({ elements: { canvas } });

console.log("App created", app);
