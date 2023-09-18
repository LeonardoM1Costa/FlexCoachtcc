import styled from "styled-components/native";

export const RoundedView = styled.View`
  width: 317px;
  height: 77px;
  background-color: #a8124b;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  border-radius: 23px; /* Metade da largura (ou altura) para criar uma forma circular */
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Ststext = styled.Text`
  color: #fff;
  margin-left: 30px;
  width: 140px;
  font-size: 18px;
  line-height: 29.2px;
  margin-top: 20px;
`;

export const Ststext2 = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
`;
export const Stspessoal = styled.View`
  width: 319px;
  height: 65px;
  background-color: #d13e0d;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  border-radius: 23px;
  align-items: flex-start; /* Alinha o conteúdo à esquerda */
  justify-content: flex-start; /* Alinha o conteúdo no topo */
`;

export default function RoundedViewWithText({ title }) {
  return (
    <RoundedView>
      <Title>{title}</Title>
    </RoundedView>
  );
}
