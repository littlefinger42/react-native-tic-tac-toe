import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";

import { colors, sizes } from "../utils/theme";

interface ButtonProps {
  onPress: (payload: GestureResponderEvent) => void;
  label: string;
}

const Button = ({ onPress, label }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.button.text,
  },
  button: {
    backgroundColor: colors.button.background,
    padding: sizes.formControlPadding,
    borderRadius: sizes.lvl0,
  },
});

export { Button };
export default Button;
