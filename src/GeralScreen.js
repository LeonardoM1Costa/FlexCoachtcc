import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "./components/Header";
import {
  RoundedView,
  Title,
  Ststext,
  Stspessoal,
  Ststext2,
} from "./styles/StyleGeral";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Geral() {
  return (
    <View style={styles.container}>
      <Header />
      <RoundedView>
        <Title>Seu Progresso</Title>
      </RoundedView>
      <Ststext>Status Pessoal</Ststext>
      <Stspessoal>
        <View style={styles.iconTextContainer}>
          <FontAwesome5 name="fire-alt" size={32} color="white" />
          <Ststext2>Calorias</Ststext2>
        </View>
      </Stspessoal>
      <Stspessoal>
        <View style={styles.iconTextContainer}>
          <FontAwesome5 name="weight" size={24} color="white" />
          <Ststext2>Peso</Ststext2>
        </View>
      </Stspessoal>
      <Stspessoal>
        <View style={styles.iconTextContainer}>
          <Ststext2>Avaliações</Ststext2>
        </View>
      </Stspessoal>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Item 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080705",
  },
  iconTextContainer: {
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  content: {
    flex: 1,
    // Estilos para o conteúdo da tela
  },
  tabBar: {
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
});
