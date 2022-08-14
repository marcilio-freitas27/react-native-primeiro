import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import { styles  } from "../style/styleexample"

export default function AssetExample({ navigation }) {
  const [users, setUsers] = React.useState([]);
  const conn = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    setUsers(data.data);
  };

  React.useEffect(() => {
    conn();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hello ReqRes users!</Text>
      <ScrollView>
        {users.map((user) => {
          return (
            <>
              <View key={user.id}>
                <Text>Nome: {"\n" + user.first_name + "\n"}</Text>
                <Text>Email: {user.email + "\n"} </Text>
                <Image resizeMode="stretch" source={{ uri: "user.avatar" }} />
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
