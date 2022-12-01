import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/styleexample";

// import openSocket from "socket.io-client";


export default function ArduinoScreen(navigation) {
  // const socket = openSocket("http://localhost:2000");
  
  const [text, setText] = useState(false);

  function handleChange() {
    setText(!text);
    // socket.emit("toggleLight");
  }

  return (
    <View style={styles.containerButton}>
      <Text>Arduino</Text>
      <TouchableOpacity onPress={handleChange} style={styles.button}>
        <Text style={styles.textButton}>{text ? "On" : "Off"}</Text>
      </TouchableOpacity>
    </View>
  );
}

