/* react */
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Button as MyButton,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";

/* model */
import { setItems, getUser, getItems, addItems } from "../model/user";

/**style */
import { styles } from "../style/stylecadastroscreen";

const Separator = () => <View style={styles.separator} />;

export default function CadastroScreen({ navigation, route }) {
  const [nomeText, setNome] = React.useState("");
  const [emailText, setEmail] = React.useState("");
  const [items, setItems] = useState(getItems);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myborder}>
        <View>
          <Text style={styles.text}>Cadastro de Usuários</Text>
          <Text style={styles.textContent}>Nome: </Text>
          <TextInput
            multiline
            style={styles.input}
            value={nomeText}
            onChangeText={setNome}
          ></TextInput>
          <StatusBar style="auto" />
        </View>
        <Separator></Separator>
        <View>
          <Text style={styles.textContent}>E-mail: </Text>
          <TextInput
            multiline
            style={styles.inputTwo}
            value={emailText}
            onChangeText={setEmail}
          ></TextInput>
          <Separator></Separator>
          <Separator></Separator>
          <StatusBar style="auto" />
        </View>
        <View style={styles.mybutton}>
          <MyButton
            onPress={() => {
              addItems({
                id: items.length + 1,
                nome: nomeText,
                email: emailText,
                alterar: (
                  <Button
                    title="Edit"
                    onPress={() =>
                      navigation.navigate("Alterar", {
                        id: items.id,
                        nome: items.nome,
                        email: items.email,
                      })
                    }
                  />
                ),
              });
              navigation.navigate("Home");
            }}
            title="Cadastrar"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
