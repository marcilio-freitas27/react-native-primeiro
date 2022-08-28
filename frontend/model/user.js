import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Text,
  View,
  Button as MyButton,
  Button,
  ScrollView,
  Modal,
  Pressable,
  Post,
} from "react-native";

const items = [
  {
    id: "1",
    nome: "teste",
    email: "teste@email.com",
    alterar: (
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate("Alterar", {
            nome: items.nome,
            Email: items.email,
          })
        }
      />
    ),
  },
  {
    id: "2",
    nome: "nome",
    email: "nome@email.com",
    alterar: (
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate("Alterar", {
            nome: items.nome,
            email: items.email,
          })
        }
      />
    ),
  },
];

const getItems = () => {
    return items;
}

const addItems = (value) => {
    items.push(value)
}

const setItems = (value) => {
    let items = value;
    return items;
}

const createUser = () => {
  AsyncStorage.getItem("user");
};

const getUser = () => {
  AsyncStorage.getItem("user");
};

const setUser = (value) => {
  AsyncStorage.setItem("user", value);
};

const deleteUser = () => {
  AsyncStorage.removetItem("user");
};

const createEmail = () => {
  AsyncStorage.getItem("value");
};

const getEmail = () => {
  AsyncStorage.getItem("email");
};

const setE_mail = (value) => {
  AsyncStorage.setItem("email", value);
};
const deleteEmail = () => {
  AsyncStorage.removetItem("email");
};

export {
  addItems,
  getItems,
  setItems,
  createEmail,
  getEmail,
  deleteEmail,
  setE_mail,
  getUser,
  deleteUser,
  setUser,
  createUser,
};
