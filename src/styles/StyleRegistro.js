import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: "center";
  align-items: "center";
  background-color: #080705;
`;

export const Buttondirect = styled.View`
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: 500px;
  margin-top: 144px;
  margin-left: 33px;
  margin-right: 44px;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 60px;
`;

export const ButtonA = styled.TouchableOpacity`
  border-radius: 27px;
  width: 140px;
  padding: 10px 20px;
  height: 200px;
  margin: 0 35px;
  justify-content: center;
  align-items: center;
  background-color: ${({ pressed }) => (pressed ? "#D13E0D" : "#1E1E1E")};
  /* Margem entre os botões */
`;
export const ButtonP = styled.TouchableOpacity`
  border-radius: 27px;
  width: 140px;
  height: 200px;
  padding: 10px 20px;
  margin-right: 35px;
  justify-content: center;
  align-items: center;
  background-color: ${({ pressed }) => (pressed ? "#A8124B" : "#1E1E1E")};
`;

export const ButtontextoA = styled.Text`
  color: #ffff;
  font-size: 20px;
`;
export const ButtontextoP = styled.Text`
  color: #ffff;
  font-size: 20px;
`;
export const Buttonconcl = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 21px;
  background-color: #a8124b;
  width: 300px;
  height: 800px;

  height: 58px;
  flex-shrink: 0;
  margin-top: 50px;
  margin-left: 40px;
`;

export const ButtonconclText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: "Arial";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
