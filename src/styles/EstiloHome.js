import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #080705;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 200px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 21px;
  background-color: #a8124b;
  width: 300px;
  height: 800px;

  height: 58px;
  flex-shrink: 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Arial";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
