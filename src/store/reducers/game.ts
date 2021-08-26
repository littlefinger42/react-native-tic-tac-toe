import { createSlice } from "@reduxjs/toolkit";

import { Player } from "../../types";

interface GameState {
  turn: Player;
}

const initialState: GameState = {
  turn: Player.X,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    nextTurn: (state) => {
      state.turn = state.turn === Player.X ? Player.O : Player.X;
    },
  },
});

export const { nextTurn } = gameSlice.actions;

export default gameSlice.reducer;
