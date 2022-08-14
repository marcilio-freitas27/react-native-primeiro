import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import HomeScreen from "./view/homescreen";
import CadastroScreen from "./view/cadastroscreen";
import AlterarScreen from "./view/alterarscreen";
import AssetExample from "./view/AssetExample";
import ReqresExample from "./view/ReqresExample";
import Item from "./view/item";

const Stack = createNativeStackNavigator();

// const new
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Reqres" component={ReqresExample} />
        <Stack.Screen name="Mysql" component={AssetExample} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Alterar" component={AlterarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
