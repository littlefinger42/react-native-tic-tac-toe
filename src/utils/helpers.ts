import { Player, Grid } from "../types";

const generateGrid = (size: number) => {
  var arr: (Player | undefined)[][] = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = undefined;
    }
  }
  return arr;
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

export { diagonalMatch, rowMatch, columnMatch, generateGrid };
