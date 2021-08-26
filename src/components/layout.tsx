import React, { ReactNode } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import { colors, sizes } from "../utils/theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.webp")} />
      <View style={styles.content}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginTop: sizes.lvl4,
  },
  text: {
    color: colors.text,
  },
});

export { Layout };
export default Layout;
