/* react */
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Alert,
  Text,
  View,
  Button as MyButton,
  TextInput,
  SafeAreaView,
  Platform
} from "react-native";

/* model */
import { userLogin } from "../functions/verify";
/**style */
import { styles } from "../style/stylecadastroscreen";

const Separator = () => <View style={styles.separator} />;

export default function LoginScreen({ navigation }) {
  const [nomeText, setNome] = React.useState("");
  const [senhaText, setSenha] = React.useState("");
  const loginAlert = (mensagem) => {
    if(Platform.OS === 'web'){
      window.alert(mensagem)
    } else {
      Alert.alert(
        'Erro',
        mensagem,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myborder}>
        <View>
          <Text style={styles.text}>Login</Text>
          <Text style={styles.textContent}>Nome: </Text>
          <TextInput
            style={styles.input}
            value={nomeText}
            onChangeText={setNome}
          ></TextInput>
          <StatusBar style="auto" />
        </View>
        <Separator></Separator>
        <View>
          <Text style={styles.textContent}>Senha: </Text>
          <TextInput
            secureTextEntry
            style={styles.inputTwo}
            value={senhaText}
            onChangeText={setSenha}
          ></TextInput>
          <Separator></Separator>
          <Separator></Separator>
          <StatusBar style="auto" />
        </View>
        <View style={styles.mybutton}>
          <MyButton
            onPress={() => {
              if(userLogin(nomeText, senhaText)){
                navigation.navigate("Home");
                loginAlert(`Bem-vindo: ${nomeText}`);
              }else{
                loginAlert('Usuário ou senha incorretos')
              }
            }}
            title="Entrar"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
