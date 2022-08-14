import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Item(props, { navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{props.item}</Text>
      </View>
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Button title="Del"></Button>
      </View>
      <View
        stylestyle={{
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Button title="Edit">
          onPress = {() => { navigation.navigate("Alterar"); }}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
  },
});
