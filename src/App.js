// @flow
import * as React from "react";
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-elements";
import ButtonsExample from "./Buttons";

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar hidden />
        <View style={styles.appHeader}>
          <Text h4 style={styles.appTitle}>
            React Native Elements
          </Text>
          <Text h5 style={styles.appTitle}>
            Cross-Platform Example
          </Text>
        </View>
        <ScrollView>
          <ButtonsExample />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    height: 150,
    backgroundColor: "#222",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    textAlign: "center",
    color: "white"
  },
  container: {
    flex: 5
  }
});

export default App;
