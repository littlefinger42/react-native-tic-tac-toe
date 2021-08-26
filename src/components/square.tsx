import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import { colors } from "../utils/theme";
import { SquareActive } from "../types";

interface SquareProps {
  onPress: (event: GestureResponderEvent) => void;
  active: SquareActive | undefined;
}

const Square = ({ onPress, active }: SquareProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.square,
        {
          backgroundColor: active
            ? colors.square.active
            : colors.square.inactive,
        },
      ]}
      onPress={onPress}
    >
      hi
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    borderThickness: 1,
    borderColor: colors.square.active,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Square };
export default Square;
