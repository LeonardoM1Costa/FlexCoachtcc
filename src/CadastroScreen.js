import React, { useState } from "react";
import {
  Textcadastro,
  Textsenha,
  Buttoncadastro,
  Buttontexto,
  Container,
  Textemail,
  Flexboxcad,
} from "./styles/StyleCadastro";

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    // Implementar o código para realizar o cadastro com o email e senha
  };

  return (
    <Container>
      <Textcadastro>FlexCoach</Textcadastro>
      <Flexboxcad>
        <Textemail
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={email}
          onChangeText={setEmail}
        />
      </Flexboxcad>
      <Flexboxcad>
        <Textsenha
          placeholder="Senha"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Flexboxcad>

      <Buttoncadastro onPress={() => navigation.navigate("Registro")}>
        <Buttontexto>Cadastrar</Buttontexto>
      </Buttoncadastro>
    </Container>
  );
};
export default CadastroScreen;
