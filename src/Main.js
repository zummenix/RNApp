/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import PropTypes from "prop-types";

type Props = { name: string };
export default class MainScreen extends Component<Props> {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired
    }).isRequired
  };
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
