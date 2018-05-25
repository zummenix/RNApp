/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={[
              {
                key:
                  "what if we use very long text long text long text long text long text"
              },
              { key: "some more text" }
            ]}
            renderItem={({ item }) => <ListItem name={item.key} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

type ListItemProps = { name: string };
export class ListItem extends Component<ListItemProps> {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.line} />
        <Text style={styles.listItemText} numberOfLines={1}>
          {this.props.name}
        </Text>
        <View style={styles.line} />
      </View>
    );
  }
}

const colors = { text: "#333333", background: "#F5FCCA", line: "#DDD" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  listItemText: {
    marginLeft: 20,
    marginRight: 20,
    color: colors.text,
    fontSize: 20
  },
  listItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 44
  },
  line: {
    height: 0.5,
    backgroundColor: colors.line
  }
});
