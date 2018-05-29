/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

const list = [{ key: "Example 1" }, { key: "Example 2" }];

type Props = {};
export default class App extends Component<Props> {
  _onPress() {}
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            ItemSeparatorComponent={() => <View style={styles.line} />}
            data={list}
            renderItem={({ item, separators }) => (
              <TouchableHighlight
                onPress={() => this._onPress(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <ListItem name={item.key} />
              </TouchableHighlight>
            )}
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
        <Text style={styles.listItemText} numberOfLines={1}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const colors = {
  text: "#333333",
  background: "#F5FFFE",
  line: "#DDD"
};

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
    justifyContent: "center",
    height: 44
  },
  line: {
    height: 0.5,
    backgroundColor: colors.line
  }
});
