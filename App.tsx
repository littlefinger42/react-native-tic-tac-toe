import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import { Layout } from "./src/components/layout";
import { Game } from "./src/components/game";

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <StatusBar style="auto" />
        <Game />
      </Layout>
    </Provider>
  );
}
