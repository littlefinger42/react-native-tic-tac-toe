import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { doTurn, reset, setGameSize } from "../store/reducers/game";
import { RootState } from "../store";
import { colors, sizes } from "../utils/theme";
import { Board } from "./board";
import { Button } from "./button";
import { GridSizeInput } from "./gridSizeInput";

const Game = () => {
  const { turn, turns, grid, winner, size } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <View style={styles.sectionWrapper}>
        <Text style={styles.text}>Current turn: {turn}</Text>
        <Text style={styles.text}>Turns: {turns}</Text>
        <Text style={styles.text}>Winner: {winner}</Text>
      </View>
      <View style={styles.gameWrapper}>
        <Board
          onSquarePress={(payload) => dispatch(doTurn(payload))}
          grid={grid}
          disabled={!!winner}
        />
      </View>
      <View style={styles.sectionWrapper}>
        <Button onPress={() => dispatch(reset())} label="Reset" />
      </View>
      <View style={styles.sectionWrapper}>
        <GridSizeInput
          initialGridSize={size}
          onChange={(gridSize) => dispatch(setGameSize(gridSize))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
  sectionWrapper: {
    marginTop: sizes.lvl2,
  },
  gameWrapper: {
    marginTop: sizes.lvl2,
    alignItems: "center",
  },
});

export { Game };
export default Game;
