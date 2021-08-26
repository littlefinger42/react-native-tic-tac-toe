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
  active?: SquareActive;
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
    >
      {active}
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
