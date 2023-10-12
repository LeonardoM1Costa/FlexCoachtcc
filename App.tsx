import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Welcomescreen";
import CadastroScreen from "./src/CadastroScreen";
import RegistroScreen from "./src/RegistroScreen";
import GeralScreen from "./src/pages/GeralScreen";
import Auth from "./src/pages";

const App = () => {
  return <Auth />;
};

export default App;
