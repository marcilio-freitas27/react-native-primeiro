/* react */
import { Text, View, Button, ScrollView, Modal, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

/* model */
import { getItems, setItems } from "../model/user";

/* style */
import { styles } from "../style/stylehomescreen";

const Separator = () => <View style={styles.separator} />;

export default function HomeScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  React.useEffect(() => {
    if (route.params?.nome && route.params?.email) {
    }
  }, [route.params?.nome, route.params?.email]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        {setItems(getItems()).map((item) => (
          <Text key={item.id}>
            {item.id + " "}
            {item.nome + " "}
            {item.email + " "}
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
                        onPress={() => {
                          setModalVisible(!modalVisible);
                          getItems().splice(getItems[item.id], 1);
                        }}
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
                <Separator></Separator>
              </>
            }
            {
              <>
                <Button
                  title="Edit"
                  onPress={() =>
                    navigation.navigate("Alterar", {
                      nome: item.nome,
                      Email: item.email,
                    })
                  }
                />
              </>
            }
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
