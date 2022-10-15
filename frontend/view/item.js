import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import openSocket from "socket.io-client";

export default function Item(navigation) {
  // const socket = openSocket("http://localhost:2000");

  const [text, setText] = useState(false);

  function handleChange() {
    setText(!text);
    // socket.emit("toggleLight");
    console.log('teste');
  }

  return (
    <View style={styles.container}>
      <Text>Arduino</Text>
      <TouchableOpacity onPress={handleChange} style={styles.button}>
        <Text style={styles.textButton}>{text ? "On" : "Off"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    padding: 14
  },

  textButton: {
    fontSize: 30,
    color: "#fff"
  }
});
