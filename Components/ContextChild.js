import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContextConsumer } from "../App";
export default class ContextChild extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContextConsumer>
          {users => {
            let all = [];
            for (let index = 0; index < users.length; index++) {
              const person = users[index];
              all.push(<Text key={index}>{person.name}</Text>);
            }
            return all;
          }}
        </ContextConsumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
