import { React } from "react";
import {
  Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import HomeScreen from "./view/homescreen";
import CadastroScreen from "./view/cadastroscreen";
import AlterarScreen from "./view/alterarscreen";
import ListScreen from "./view/listscreen";
import ReqresScreen from "./view/reqresscreen";
import ArduinoScreen from "./view/arduinoscreen";
import LoginScreen from "./view/loginscreen";

const Stack = createNativeStackNavigator();

// const new
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Arduino" component={ArduinoScreen} />
        <Stack.Screen name="Reqres"component={ReqresScreen} />
        <Stack.Screen name="Mysql" component={ListScreen} />
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerRight: () => (
              <Button title="Sair" onPress={ ()=> {
                localStorage.removeItem('access_token');
                navigation.navigate("Login");
              }}>
        
              </Button>
            )
          }}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Alterar" component={AlterarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
