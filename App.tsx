import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";

import { Layout } from "./src/components/layout";
import { Board } from "./src/components/board";

export default function App() {
  return (
    <Layout>
      <StatusBar style="auto" />
      <Text>Tic Tac Toe</Text>
      <Board size={4} />
    </Layout>
  );
}
