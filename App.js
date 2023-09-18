import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Homescreen";
import CadastroScreen from "./src/CadastroScreen";
import RegistroScreen from "./src/RegistroScreen";
import GeralScreen from "./src/GeralScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // Isso oculta o cabeçalho
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen
          name="Geral"
          component={GeralScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
