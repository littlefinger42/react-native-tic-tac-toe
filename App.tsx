import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import { Layout } from "./src/components/layout";
import { Board } from "./src/components/board";

export default function App() {
  return (
    <Provider store={store}>
    <Layout>
      <StatusBar style="auto" />
      <Text>Tic Tac Toe</Text>
      <Board size={4} />
    </Layout>
    </Provider>
  );
}
