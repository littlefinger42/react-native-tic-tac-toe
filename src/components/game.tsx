import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../store";
import { colors } from "../utils/theme";
import { Board } from "./board";

const Game = () => {
  const turn = useSelector((state: RootState) => state.game.turn);

  return (
    <View>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <Text style={styles.text}>Current turn: {turn}</Text>
      <Board size={4} />
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
