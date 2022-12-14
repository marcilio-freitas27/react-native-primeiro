
/* react */
import * as React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

/* style */
import { styles } from "../style/styleexample";

export default function ReqresScreen() {
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
              <View>
                <Text>Nome: {"\n" + user.first_name + "\n"}</Text>
                <Text>Email: {user.email + "\n"} </Text>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: user.avatar }}
                />
                {/* <FlatList data={users} keyExtractor={(users) => users.id} /> */}
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
