// @flow
import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import PropTypes from "prop-types";

type Props = {};
export default class DetailsScreen extends Component<Props> {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired
    }).isRequired
  };
  render() {
    const itemId = this.props.navigation.getParam("itemId", 0);
    return (
      <View>
        <Text>Details, itemId: {JSON.stringify(itemId)}</Text>
        <Button
          title="Go To Next Details"
          onPress={() =>
            this.props.navigation.push("Details", { itemId: itemId + 1 })
          }
        />
        <Button
          title="Go To Main"
          onPress={() =>
            this.props.navigation.navigate("Main", { itemId: itemId + 1 })
          }
        />
      </View>
    );
  }
}
