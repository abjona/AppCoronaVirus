import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 50px;
    flex: 1;
    justify-content: center;
    padding: 20px 10px;
    background-color: #fff;
`;

export const Header = styled.View`
    flex-direction: row;
    z-index: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    background-color: #fff;
`;

export const Row = styled.View`
    flex-direction: row;
    margin-bottom:10px;
    width: 100%;
`;

export const Col = styled.View`
    flex-direction: column;
    padding: 5px;
    width: 50%;
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


export const TitleMenu = styled.View`
    width:100%;
    height: 40px;
    background-color: #3331;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;

`;


export const Title = styled.Text`
    font-size: 17px;
    text-align: center;
`;

export const Text = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`;

export const H1 = styled.Text`
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 8px;
`;

