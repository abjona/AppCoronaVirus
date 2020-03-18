import React from 'react';

import { Container, Card, Col, Row, TitleMenu, Text, H1, Img } from './styles';
import brasil from "./../../assets/imgs/brazil.png";
import mundo from "./../../assets/imgs/world.png";

export default function Home({ navigation }) {
    
    return (
        <Container>
            <Row>
                <H1>Casos</H1>
            </Row>
            <Row>
                <Col>
                    <Card activeOpacity={0.4} onPress={()=> navigation.navigate("Brasil")}>
                        <Img style={{ resizeMode: "contain"}} source={brasil}></Img>
                        <TitleMenu>
                            <Text>Brasil</Text>
                        </TitleMenu>
                    </Card>
                </Col>
                <Col>
                    <Card activeOpacity={0.4} onPress={()=> navigation.navigate("Mundo")}>
                    <Img style={{ resizeMode: "contain"}} source={mundo}></Img>
                        <TitleMenu>
                            <Text>Mundo</Text>
                        </TitleMenu>
                    </Card>
                </Col>
            </Row>
            <Row>
                <H1>Notícias</H1>
            </Row>
        </Container>

    );
}
