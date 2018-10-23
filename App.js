import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ContextChild from "./ContextChild";
import api from "./ApiHandler";
const users = [{ name: "A" }, { name: "B" }, { name: "C" }];
const { Provider, Consumer } = React.createContext({ users });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentWillMount() {
    api.fetchUsers((users, error) => {
      if (error) {
        // Handle
        console.log(error);
      }
      this.setState({ users });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider value={this.state.users}>
          <ContextChild />
        </Provider>
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

export const ContextConsumer = Consumer;
