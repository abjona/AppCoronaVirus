import React, { useEffect, useState, useRef } from 'react';

import {
    Container,
    Card,
    Col,
    Row,
    TitleMenu,
    Text,
    Load,
    Img,
    CardNotice,
    Title,
    RowTitle,
    ScrollHorizontal,
    ImgNotice,
    Badge,
    BadgeText,
    ColTitle,
    TitleNotice,
    TextNotice,
    Description,
    Link,
    TextLink,
    ContainerNotice,
    DatePublication,
    Social,
    ButtonIcon,
    IconFace,
    IconInsta,
    IconLink,
    IconGit
} from './styles';
import brasil from "./../../assets/imgs/brazil.png";
import mundo from "./../../assets/imgs/world.png";

import { WebView } from 'react-native-webview';

import RBSheet from "react-native-raw-bottom-sheet";

import { notice } from "./../../services/apiService";
import { View, Linking } from "react-native";
import moment from "moment";

export default function Home({ navigation }) {
    const refRBSheet = useRef();
    const [notices, setNotices] = useState([]);
    const [noticeInfo, setNoticeInfo] = useState([])
    const [date, setDate] = useState(null);

    const gotToPublication = (url) => {
        if (url != null) {
            Linking.openURL(url);
        }
    }

    useEffect(() => {
        var loadDate = new Date();
        var DateFormat = moment(loadDate).format('YYYY-MM-DD');
        var DateFormatLabel = moment(loadDate).format('DD/MM/YYYY');
        setDate(DateFormatLabel)
        async function loadNotices() {
            await notice(DateFormat).then((data) => {
                setNotices(data)
            });
        }

        loadNotices();
    }, [])
    return (
        <>
            <Container>
                <RowTitle>
                    <Title>Casos do Vírus </Title>
                </RowTitle>
                <Row>
                    <Col>
                        <Card activeOpacity={0.4} onPress={() => navigation.navigate("Brasil")}>
                            <Img style={{ resizeMode: "contain" }} source={brasil}></Img>
                            <TitleMenu>
                                <Text>Brasil</Text>
                            </TitleMenu>
                        </Card>
                    </Col>
                    <Col>
                        <Card activeOpacity={0.4} onPress={() => navigation.navigate("Mundo")}>
                            <Img style={{ resizeMode: "contain" }} source={mundo}></Img>
                            <TitleMenu>
                                <Text>Mundo</Text>
                            </TitleMenu>
                        </Card>
                    </Col>
                </Row>
                <RowTitle>
                    <ColTitle>
                        <Title>Últimas Notícias</Title>
                    </ColTitle>

                    <ColTitle>
                        <Badge>
                            <BadgeText>
                                {notices.length == 0 ? 0 :
                                    notices["totalResults"]
                                }
                            </BadgeText>
                        </Badge>
                    </ColTitle>
                </RowTitle>
                <ScrollHorizontal showsHorizontalScrollIndicator={false} horizontal={true}>
                    {notices.length == 0 ? <View style={{ alignContent: "center", justifyContent: "center" }}>
                        <Load size={50} color='#333'></Load>
                    </View> :
                        notices["articles"].map((element) => {
                            return (
                                <CardNotice onPress={() => {
                                    setNoticeInfo(element)
                                    refRBSheet.current.open()
                                }}>
                                    <ImgNotice style={{ resizeMode: "cover" }} source={{ uri: element["urlToImage"] }}>

                                    </ImgNotice>
                                    <TitleNotice>
                                        <TextNotice>{element["title"]}</TextNotice>
                                    </TitleNotice>
                                </CardNotice>
                            )
                        })
                    }

                </ScrollHorizontal>
                
                <Social>
                <RowTitle>
                    <Title>Criado por Jonathan Ramsés </Title>
                </RowTitle>
                    <Row>
                        <ColTitle>
                            <ButtonIcon onPress={()=> gotToPublication('https://www.facebook.com/jonathan.ramsesalvesborges')}>
                                <IconFace />
                            </ButtonIcon>
                        </ColTitle>

                        <ColTitle>
                            <ButtonIcon onPress={()=> gotToPublication('https://www.instagram.com/ramses.jonathan/')}>
                                <IconInsta />
                            </ButtonIcon>
                        </ColTitle>

                        <ColTitle>
                            <ButtonIcon onPress={()=> gotToPublication('https://www.linkedin.com/in/jonathan-rams%C3%A9s-alves-borges-b6890214b/')}>
                                <IconLink />
                            </ButtonIcon>
                        </ColTitle>

                        <ColTitle>
                            <ButtonIcon onPress={()=> gotToPublication('https://github.com/abjona')}>
                                <IconGit />
                            </ButtonIcon>
                        </ColTitle>

                    </Row>
                </Social>
            </Container>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={300}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "#3333"
                    },
                    draggableIcon: {
                        backgroundColor: "#3333"
                    }
                }}
            >
                <ContainerNotice>
                    <Title>{noticeInfo ? noticeInfo["title"] : null}</Title>

                    <Description>{noticeInfo ? noticeInfo["description"] : null}</Description>

                    <DatePublication>Publicado em : {noticeInfo ? moment(noticeInfo["publishedAt"]).format('DD/MM/YYYY HH:mm') : null}</DatePublication>

                    <Link onPress={() => {
                        gotToPublication(noticeInfo["url"])
                    }}>
                        <TextLink>Matéria completa</TextLink>
                    </Link>
                </ContainerNotice>

            </RBSheet>
        </>

    );
}
