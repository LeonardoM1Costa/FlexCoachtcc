import React from "react";
import { StatusBar } from "react-native";
import { Container, Title, Button, ButtonText } from "./styles/EstiloHome";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>FlexCoach</Title>
      <Button onPress={() => navigation.navigate("Cadastro")}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default HomeScreen;
