import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Player, SquarePressPayload, Grid } from "../../types";

interface GameState {
  turn: Player;
  size: number;
  grid: Grid;
  winner: Player | undefined;
}

const initialState: GameState = {
  turn: Player.X,
  size: 3,
  winner: undefined,
  grid: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
};

const rowMatch = (row: (Player | undefined)[]) => {
  if (row.every((val) => val === row[0])) {
    return row[0];
  }
};

const columnMatch = (grid: (Player | undefined)[]) => {};

const checkForWinner = (grid: Grid) => {
  const rowWinner = grid.find((row) => rowMatch(row));
  if (rowWinner) return rowWinner[0];
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    doTurn: (state, action: PayloadAction<SquarePressPayload>) => {
      const { row, column } = action.payload;

      state.grid = Object.assign([...state.grid], {
        [row]: Object.assign([...state.grid[row]], {
          [column]: state.turn,
        }),
      });

      state.turn = state.turn === Player.X ? Player.O : Player.X;

      state.winner = checkForWinner(state.grid);
    },
    setGameSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
      // TODO: change grid 2d array to correct size
    },
  },
});

export const { doTurn } = gameSlice.actions;

export default gameSlice.reducer;
