import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  diagonalMatch,
  rowMatch,
  columnMatch,
  generateGrid,
} from "../../utils/helpers";
import { Player, SquarePressPayload, Grid } from "../../types";

interface GameState {
  turn: Player;
  turns: number;
  size: number;
  grid: Grid;
  winner: Player | undefined;
}

const initialState: GameState = {
  turn: Player.X,
  turns: 0,
  size: 3,
  winner: undefined,
  grid: generateGrid(3),
};

const checkForWinner = (grid: Grid) => {
  let winner;
  winner = rowMatch(grid) || columnMatch(grid) || diagonalMatch(grid);
  return winner;
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    doTurn: (state, action: PayloadAction<SquarePressPayload>) => {
      if (state.winner) return;

      const { row, column } = action.payload;

      state.grid = Object.assign([...state.grid], {
        [row]: Object.assign([...state.grid[row]], {
          [column]: state.turn,
        }),
      });

      state.turn = state.turn === Player.X ? Player.O : Player.X;
      state.turns = state.turns + 1;
      state.winner = checkForWinner(state.grid);
    },
    setGameSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
      state.turns = 0;
      state.turn = Player.X;
      state.grid = generateGrid(action.payload);
    },
    reset: (state) => {
      state.turns = 0;
      state.turn = Player.X;
      state.grid = generateGrid(state.size);
    },
  },
});

export const { doTurn, reset, setGameSize } = gameSlice.actions;

export default gameSlice.reducer;
