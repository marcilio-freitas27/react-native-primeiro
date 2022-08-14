import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button as MyButton,
  TextInput,
  SafeAreaView,
} from "react-native";

/**style */
import { styles } from "../style/stylecadastroscreen";

import React, {useState} from 'react';
const Separator = () => <View style={styles.separator} />;


export default function AlterarScreen({ navigation, route }) {
  const [ text, setNome ] = React.useState(''); 
    const [ email, setEmail ] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myborder}>
        <View>
          <Text style={styles.text}>Alteração de Usuários</Text>
          <Text style={styles.textContent}>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={() => setNome}
            defaultValue={text}
          ></TextInput>
          <StatusBar style="auto" />
        </View>
        <Separator></Separator>
        <View>
          <Text style={styles.textContent}>E-mail: </Text>
          <TextInput
            style={styles.input}
            onChangeText={() => setEmail}
            defaultValue={email}
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


const onPressLearnMore = () => {
  alert("Message is here!");
};
