/* react */
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import {
  Text,
  View,
  Button as MyButton,
  TextInput,
  SafeAreaView,
} from "react-native";

/*model*/
import { setUser, getUser, getItems } from "../model/user";

/**style */
import { styles } from "../style/stylecadastroscreen";

const Separator = () => <View style={styles.separator} />;

export default function AlterarScreen({ navigation, route }) {
  const [ text, setNome ] = React.useState(''); 
  const [ email, setEmail ] = React.useState('');
  const { id, nome, Email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myborder}>
        <View>
          <Text style={styles.text}>Alteração de Usuários</Text>
          <Text style={styles.textContent}>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            defaultValue={nome}
          ></TextInput>
          <StatusBar style="auto" />
        </View>
        <Separator></Separator>
        <View>
          <Text style={styles.textContent}>E-mail: </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            defaultValue={Email}
          ></TextInput>
          <Separator></Separator>
          <Separator></Separator>
          <StatusBar style="auto" />
        </View>
        <View style={styles.mybutton}>
          <MyButton
            onPress={() => navigation.navigate("Home")}
            title="Alterar"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
