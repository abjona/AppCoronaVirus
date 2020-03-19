import styled from 'styled-components/native';
import { AntDesign } from "@expo/vector-icons";
export const Container = styled.ScrollView`
    flex: 1;
    padding: 10px 20px;
    background-color: #fff;
`;

export const Load = styled.ActivityIndicator`
   
`;

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Card = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    background-color:  #333;
`;

export const State = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const Search = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #4444;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
`;


export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const TextCase = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin: 10px;
`;


export const IconRight = styled(AntDesign).attrs({
  name: "right"
})`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  font-size: 20px;
  z-index: 2;
  text-align: center;
  padding: 5px 0px;
  margin-top: 5px;
  color: #fff;
`;

export const RowCard = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const ColIcon = styled.View`
    flex-direction: column;
    justify-content: center;
`;

export const ColState = styled.View`
    justify-content: center;
    flex-direction: column;
    width: 90%;
`;

export const CardCases = styled.View`
    flex: 1;
    width: 100%;
    height: 100px;

    border-width: 0.5px;
    border-color: #3333;
    border-radius: 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const ColCases = styled.View`
    flex-direction: column;
    width: 50%;
    padding: 5px;
`;

export const RowCases = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const Title = styled.View`
    width:100%;
    height: 40px;
    background-color: #3331;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;

`;
