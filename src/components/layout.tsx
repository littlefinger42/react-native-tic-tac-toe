import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../utils/theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.text,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.text,
  },
});

export { Layout };
export default Layout;
