import { Shared } from "../../shared";

export const createKey = (coordinates: Shared.Types.PositionType): string =>
  `${coordinates.x}-${coordinates.y}`;

export const checkCollision = (
  src1: Shared.Types.PositionType[],
  src2: Shared.Types.PositionType[],
): boolean => {
  let hasCollision = false;
  const coordinatesMap = new Map<string, Shared.Types.PositionType>();

  src1.forEach((src1Item) => {
    const key = createKey(src1Item);
    coordinatesMap.set(key, src1Item);
  });

  src2.forEach((src2Item) => {
    const key = createKey(src2Item);

    if (coordinatesMap.has(key)) {
      hasCollision = true;
    }
  });

  return hasCollision;
};

export const checkCollisionWithBorders = (
  src: Shared.Types.PositionType,
): boolean => {
  if (src.x > Shared.Constants.GAME_CANVAS_SIZE.width) {
    return true;
  }

  if (src.x < 0) {
    return true;
  }

  if (src.y > Shared.Constants.GAME_CANVAS_SIZE.height) {
    return true;
  }

  if (src.y < 0) {
    return true;
  }

  return false;
};
