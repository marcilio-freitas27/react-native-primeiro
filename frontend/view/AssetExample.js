import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "../style/styleexample";

export default function AssetExample({ navigation }) {
  const [users, setUsers] = React.useState([]);
  const conn = async () => {
    const res = await fetch("http://localhost:3000/dados");
    const data = await res.json();
    setUsers(data);
  };

  React.useEffect(() => {
    conn();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Mysql Test</Text>
      <ScrollView>
        {users.map((user) => {
            return (
              <>
                <View key={user.codigo}>
                  <Text>
                    {"\n"}
                    Codigo: {user.id}
                  </Text>
                  <Text>Nome: {user.nome} </Text>
                  <Text>E-mail: {user.email} </Text>
                  <Text>Situação: {user.ativo  == 0 ? "Ativo" : "Inativo"} </Text>
                </View>
              </>
            );
          }
        )}
      </ScrollView>
    </View>
  );
}
