import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { doTurn } from "../store/reducers/game";
import { RootState } from "../store";
import { colors } from "../utils/theme";
import { Board } from "./board";

const Game = () => {
  const { turn, grid } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <Text style={styles.text}>Current turn: {turn}</Text>
      <Board
        onSquarePress={(payload) => dispatch(doTurn(payload))}
        grid={grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});

export { Game };
export default Game;
