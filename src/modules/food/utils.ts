import { Shared } from "../../shared";

export const getRandomNumber = (min: number, max: number): number => {
  return (
    Math.round(
      (Math.random() * (max - min) + min) / Shared.Constants.PIXEL_SIZE,
    ) * Shared.Constants.PIXEL_SIZE
  );
};
