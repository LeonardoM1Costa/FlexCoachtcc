import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const StatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;
export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
        <Feather name="user" size={27} color="#FFF" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.username}>Bem Vindo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    paddingTop: StatusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 60,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
    padding: 18, // Alinhe o texto à direita
  },
  buttonUser: {
    marginLeft: 10,
    width: 44,
    height: 44,
    backgroundColor: "#6C757D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44,
    radius: 93,
    marginRight: 10,
    marginTop: 24, // Ajuste a margem esquerda conforme necessário
  },
});
