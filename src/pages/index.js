import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Geral from "./GeralScreen";
import Chat from "./ChatScreen";
import Training from "./TrainingScreen";
import WelcomeScreen from "../Welcomescreen";
import CadastroScreen from "../CadastroScreen";
import RegistroScreen from "../RegistroScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Geral}></Tab.Screen>
      <Tab.Screen name="Training" component={Training}></Tab.Screen>
      <Tab.Screen name="Chat" component={Chat}></Tab.Screen>
    </Tab.Navigator>
  );
}

function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="Cadastro" component={CadastroScreen}></Stack.Screen>
        <Stack.Screen name="Registro" component={RegistroScreen}></Stack.Screen>
        <Stack.Screen name="Geral" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Auth;
