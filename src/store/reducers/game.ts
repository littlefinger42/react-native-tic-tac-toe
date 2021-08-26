import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Player, SquarePressPayload, Grid, Row } from "../../types";

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

const rowMatch = (row: Row) => {
  if (row.every((val) => val === row[0])) {
    return row[0];
  }
};

const columnMatch = (grid: Grid) => {
  for (let x = 0; x < grid.length; x++) {
    let columnMatch;

    for (let y = 1; y < grid.length; y++) {
      columnMatch =
        grid[y][x] && grid[y][x] === grid[0][x] ? grid[0][x] : undefined;
    }

    if (columnMatch) return columnMatch;
  }
};

const checkForWinner = (grid: Grid) => {
  let winner;
  winner = grid.find((row) => rowMatch(row));
  winner = columnMatch(grid);
  return winner;
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
