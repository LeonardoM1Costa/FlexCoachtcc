import react from "react";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  Container,
  Subtitle,
  ButtonA,
  ButtonP,
  ButtontextoA,
  ButtontextoP,
  Buttondirect,
  Botaoconcl,
  Buttonconcl,
  ButtonconclText,
} from "./styles/StyleRegistro";

const RegistroScreen = ({ navigation }) => {
  //CONST PARA OS BOTOES NAO SEREM PRESSIONADOS JUNTOS
  const [BotaoApress, setBotaoApress] = useState(false);
  const [BotaoPpress, setBotaoPpress] = useState(false);
  const handlePressBotaoA = () => {
    setBotaoApress(true);
    setBotaoPpress(false);
  };

  const handlePressBotaoP = () => {
    setBotaoApress(false);
    setBotaoPpress(true);
  };

  return (
    <Container>
      <Subtitle>Você quer ser registrado no aplicativo como?</Subtitle>
      <Buttondirect>
        <ButtonA pressed={BotaoApress} onPress={handlePressBotaoA}>
          <ButtontextoA>Cliente</ButtontextoA>
        </ButtonA>
        <ButtonP pressed={BotaoPpress} onPress={handlePressBotaoP}>
          <ButtontextoP>Professor</ButtontextoP>
        </ButtonP>
      </Buttondirect>
      <Buttonconcl>
        <ButtonconclText onPress={() => navigation.navigate("Geral")}>
          Concluir
        </ButtonconclText>
      </Buttonconcl>
    </Container>
  );
};

export default RegistroScreen;
