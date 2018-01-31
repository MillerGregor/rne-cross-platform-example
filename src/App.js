// @flow
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome to React</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 16,
    color: "white"
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: "center"
  }
});

export default App;
