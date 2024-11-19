export const hideElement = (element: HTMLElement) => {
  element.style.visibility = "hidden";
  element.style.opacity = "0";
};

export const showElement = (element: HTMLElement): void => {
  element.style.visibility = "visible";
  element.style.opacity = "1";
};

export const setContent = (element: HTMLElement, content: string): void => {
  element.textContent = content;
};
