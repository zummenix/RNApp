/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { NavigationScreenProp, NavigationStateRoute } from "react-navigation";

type Props = { navigation: NavigationScreenProp<NavigationStateRoute> };
export default class MainScreen extends Component<Props> {
  render() {
    const itemId = this.props.navigation.getParam("itemId", 0);
    return (
      <View style={styles.container}>
        <Text>Hello world, itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go To Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { itemId: itemId + 1 })
          }
        />
      </View>
    );
  }
}

const colors = {
  text: "#333333",
  background: "#F5FFFE"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  }
});
