import { StatusBar } from "expo-status-bar";
import * as React from 'react';
// import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button as MyButton,
  TextInput,
  SafeAreaView,
} from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';

/**style */
import { styles } from "../style/stylecadastroscreen";

const Separator = () => <View style={styles.separator} />;

export default function CadastroScreen({ navigation, route }) {
    const [ nomeText, setNome ] = React.useState(''); 
    const [ emailText, setEmail ] = React.useState('');
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
                // setNome('nome');
                // setEmail('email');
                // alert(nome + " " +  email)
                // const listItem = {id: new Date().getTime(), nome, email};
                // let savedItems = [];
                // const response = AsyncStorage.getItem('items');
                
                // if(response) savedItems = JSON.parse(response);
                // savedItems.push(listItem);
                
                // AsyncStorage.setItem('items', JSON.stringify(savedItems));
                // navigation.navigate("Home", listItem);
                navigation.navigate({
                  name: "Home",
                  params: { 
                    nome: nomeText,
                    email: emailText
                  },
                  merge: true,
                });
            }
          }
            title="Cadastrar"
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

