import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Player, SquarePressPayload } from "../../types";

interface GameState {
  turn: Player;
  size: number;
  grid: (Player | undefined)[][];
}

const initialState: GameState = {
  turn: Player.X,
  size: 3,
  grid: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
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
    },
    setGameSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
      // TODO: change grid 2d array to correct size
    },
  },
});

export const { doTurn } = gameSlice.actions;

export default gameSlice.reducer;
