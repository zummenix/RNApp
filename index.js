import { AppRegistry } from "react-native";
import MainScreen from "./src/Main";
import DetailsScreen from "./src/Details";
import { createStackNavigator } from "react-navigation";

AppRegistry.registerComponent("RNApp", () =>
  createStackNavigator(
    {
      Main: { screen: MainScreen },
      Details: { screen: DetailsScreen }
    },
    { initialRouteName: "Main" }
  )
);
