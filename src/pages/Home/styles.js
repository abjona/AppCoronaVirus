import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 10px 10px;
    background-color: #fff;
`;

export const ContainerNotice = styled.ScrollView`
    flex: 1;
    padding: 10px 20px;
    background-color: #fff;
`;

export const Load = styled.ActivityIndicator`
   
`;

export const DatePublication = styled.Text`
     margin-top: 10px;
    font-size: 14px;
    color: #3337;
    font-weight: bold;
`;

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const RowTitle = styled.View`
    flex-direction: row;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    width: 100%;
`;

export const Col = styled.View`
    flex-direction: column;
    padding: 5px;
    width: 50%;
`;

export const ColTitle = styled.View`
    flex-direction: column;
`;

export const CopRight = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 20px;
`;

export const Card = styled.TouchableOpacity`
    width: 100%;
    height: 180px;
    border-width: 0.5px;
    border-color: #3333;
    border-radius: 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const Img = styled.Image`
    height: 120px;
    width: 100%;
    margin-bottom: 8px;
`;

export const ImgNotice = styled.Image`
    width: 100%;
    height: 76%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const TitleMenu = styled.View`
    width:100%;
    height: 20%;
    background-color:  #333;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;

`;

export const TitleNotice = styled.View`
    width:100%;
    height: 60px;
    padding: 8px;
    background-color: #333;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;

`;

export const Badge = styled.View`
    padding: 5px;
    width: 40px;
    margin-left: 20px;
    border-radius: 50px;
    background-color: #f33;
    align-items: center;
`;
export const BadgeText = styled.Text`
    font-size: 17px;
    color: #fff;
    font-weight: bold;
`;

export const TextNotice = styled.Text`
    font-size: 13px;
    color: #fff;
    font-weight: bold;
`;


export const Title = styled.Text`
    font-size: 17px;
    color: #333;
    font-weight: bold;
`;

export const Description = styled.Text`
    margin-top: 10px;
    font-size: 14px;
    color: #3337;
    text-align: justify !important;
    font-weight: bold;
`;



export const Text = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;

export const H1 = styled.Text`
    font-size: 13px;
    text-align: center;
    color: #333;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 8px;
`;

export const CardNotice = styled.TouchableOpacity`
    width: 300px;
    height: 250px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;
    align-items: center;
    elevation: 0.5;
    justify-content: flex-end;
`;

export const ScrollHorizontal = styled.ScrollView`
`;

export const Link = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 50px;
  background-color: #fff;
  border-width: 1px;
  border-color:#333;
  justify-content: center;
  align-items: center;
`;

export const TextLink = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;


