import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Player, SquarePressPayload, Grid, Row } from "../../types";

interface GameState {
  turn: Player;
  turns: number;
  size: number;
  grid: Grid;
  winner: Player | undefined;
}

function generateGrid(size: number) {
  var arr: (Player | undefined)[][] = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = undefined;
    }
  }
  return arr;
}

const initialState: GameState = {
  turn: Player.X,
  turns: 0,
  size: 3,
  winner: undefined,
  grid: generateGrid(3),
};

const rowMatch = (grid: Grid) => {
  const foundRow = grid.find((row) => !!row.every((val) => val === row[0]));
  return foundRow ? foundRow[0] : undefined;
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

const diagonalMatch = (grid: Grid) => {
  let match;

  //Top left to bottom right
  if (grid[0][0]) {
    match = grid[0][0];
    for (let y = 1; y < grid.length; y++) {
      if (grid[0][0] != grid[y][y]) match = undefined;
    }
  }

  // Top right to bottom left
  if (grid[0][grid.length - 1]) {
    match = grid[0][grid.length - 1];
    for (let y = 1; y < grid.length; y++) {
      if (grid[0][grid.length - 1] != grid[y][grid.length - 1 - y])
        match = undefined;
    }
  }

  return match;
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
