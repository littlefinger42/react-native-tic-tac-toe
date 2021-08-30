import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "./button";
import { colors, sizes } from "../utils/theme";

interface GridSizeInputProps {
  onChange: (payload: number) => void;
  initialGridSize: number;
}

const GridSizeInput = ({ onChange, initialGridSize }: GridSizeInputProps) => {
  const [gridSize, setGridSize] = useState<string>(initialGridSize.toString());

  const handleChange = () => {
    onChange(parseInt(gridSize, 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grid Size:</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={gridSize}
        onChangeText={setGridSize}
      />
      <Button onPress={handleChange} label="Change" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    flex: 1,
    color: colors.text,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.input.background,
    color: colors.input.text,
    padding: sizes.formControlPadding,
    borderRadius: sizes.lvl0,
  },
});

export { GridSizeInput };
export default GridSizeInput;
