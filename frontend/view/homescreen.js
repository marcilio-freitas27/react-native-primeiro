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
// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell,
// } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import * as React from "react";

/* style */
import { styles } from "../style/stylehomescreen";

/**modal */

const Separator = () => <View style={styles.separator} />;

export default function HomeScreen({ navigation, route }) {
  // let stateOne = {
  //   tableHead: ["Nome", "Email", "Opções"],
  //   tableData: [["Teste", "teste@email.com", options]],
  // };
  // const state = stateOne;
  // let nomeText = "";
  // let emailText = "";
  const [modalVisible, setModalVisible] = useState(false);
  React.useEffect(() => {
    if (route.params?.nome && route.params?.email) {
    }
  }, [route.params?.nome, route.params?.email]);
  // const [items, setItems] = React.useState([
  //   { id: "1", nome: "teste", email: "teste@email.com" },
  //   { id: "2", nome: "nome", email: "nome@email.com" },
  // ]);
  const [items, setItems] = useState([
    {
      id: "1",
      nome: "teste",
      email: "teste@email.com",
      alterar: (
        <Button title="Edit" onPress={() => navigation.push("Alterar")} />
      ),
    },
    {
      id: "2",
      nome: "nome",
      email: "nome@email.com",
      alterar: (
        <Button title="Edit" onPress={() => navigation.push("Alterar")} />
      ),
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Text>{props.item}</Text>
      <Button title="+ Add" onPress={() => navigation.push("Cadastro")} />
      <Separator></Separator>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={state.tableHead} />
        <Rows data={state.tableData} />
      </Table> */}
      <Separator></Separator>
      <Button
        title="+ Add"
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      />
      <Separator></Separator>
      <Button
        title="Api consume - Mysql"
        onPress={() => {
          navigation.navigate("Mysql");
        }}
      />
      <Separator></Separator>
      <Button
        title="Api consume - ReqRes"
        onPress={() => {
          navigation.navigate("Reqres");
        }}
      />
      <Separator></Separator>
      <StatusBar />
      <Text style={styles.text}>Lista de Usuários</Text>
      <Separator></Separator>
      <ScrollView>
        <Text style={styles.textContent}>ID | Nome | Email | Opções</Text>
        {/* nome: {route.params?.nome}
          email: {route.params?.email} */}
        {items.map((item) => (
          <Text key={item.id}>
            {item.id}
            {item.nome}
            {item.email}
            {
              <>
                <Button title="Del" onPress={() => setModalVisible(true)} />
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Deseja excluir esse valor?
                      </Text>
                      <Pressable
                        style={[styles.button, styles.buttonYes]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Sim</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.button, styles.buttonNo]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Não</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              </>
            }
            {item.alterar}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
