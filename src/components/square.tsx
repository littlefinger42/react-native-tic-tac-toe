import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import { colors } from "../utils/theme";
import { Player } from "../types";

interface SquareProps {
  onPress: (event: GestureResponderEvent) => void;
  active?: Player;
  widthPercentage: number;
}

const Square = ({ onPress, active, widthPercentage }: SquareProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.square,
        {
          backgroundColor: active
            ? colors.square.active
            : colors.square.inactive,
          flexBasis: `${widthPercentage}%`,
        },
      ]}
      onPress={onPress}
      disabled={!!active}
    >
      <Text>{active}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.square.border,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Square };
export default Square;
