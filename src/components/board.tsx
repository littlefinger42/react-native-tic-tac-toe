import React from "react";
import { StyleSheet, View } from "react-native";

import { Square } from "../components/square";

interface LayoutProps {
  size: number;
}

const Board = ({ size }: LayoutProps) => {
  const onSquarePress = (index: number) => {
    console.log("square ", index, " pressed");
  };

  return (
    <View style={[styles.board]}>
      {Array.from({ length: size * size }, (_: number, index: number) => (
        <Square
          onPress={() => onSquarePress(index)}
          key={`square_${index}`}
          widthPercentage={100 / size} //If i was using styled-components, i would add additional styling to this component instead of passing this prop
        />
      ))}
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
