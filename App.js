import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class App extends Component {
  state = {
    todos: [
      { key: "Walk dog", style: "item" },
      { key: "Take out trash", style: "item" }
    ]
  };

  crossOut = index => {
    let newStyle = "doneItem";
    if (this.state.todos[index].style === "doneItem") {
      newStyle = "item";
    }
    const mappedTodos = this.state.todos.map((todo, stateIndex) => {
      if (index === stateIndex) {
        return { ...todo, style: newStyle };
      }
      return { ...todo };
    });
    this.setState({
      todos: [...mappedTodos]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>To Do</Text>
        <FlatList
          style={styles.body}
          data={this.state.todos}
          renderItem={({ item, index }) => (
            <Text
              onPress={() => this.crossOut(index)}
              style={styles[item.style]}
            >
              {item.key}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff000",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  heading: {
    flex: 1,
    paddingTop: 30,
    fontSize: 20
  },
  body: {
    flex: 3
  },
  item: {
    padding: 10
  },
  doneItem: {
    padding: 10,
    textDecorationLine: "line-through"
  }
});
