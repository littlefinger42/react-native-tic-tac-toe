import React from "react";
import { StyleSheet, View } from "react-native";

import { Player, Grid, SquarePressPayload } from "../types";
import { Square } from "../components/square";

interface LayoutProps {
  grid: Grid;
  onSquarePress: (payload: SquarePressPayload) => void;
}

const Board = ({ grid, onSquarePress }: LayoutProps) => {
  return (
    <View style={[styles.board]}>
      {grid.map((_, row) =>
        grid[row].map((cellValue, column) => (
          <Square
            active={cellValue}
            onPress={() => onSquarePress({ row, column })}
            key={`square_${row}_${column}`}
            widthPercentage={100 / grid.length} //If i was using styled-components, i would add additional styling to this component instead of passing this prop
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: "80%",
    aspectRatio: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
});

export { Board };
export default Board;
