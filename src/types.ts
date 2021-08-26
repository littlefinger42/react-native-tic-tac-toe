export enum Player {
  X = "X",
  O = "O",
}

export type SquarePressPayload = {
  row: number;
  column: number;
};

export type Grid = (Player | undefined)[][];
