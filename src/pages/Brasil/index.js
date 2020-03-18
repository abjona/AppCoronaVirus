import React, { useEffect, useState, useRef } from 'react';

import { Container, Load,TextCase, Row, Text, Title, IconRight, Card, State, RowCard, ColState, ColIcon, CardCases, RowCases, ColCases } from './styles';
import { getCasesBr } from "./../../services/apiService";

import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Brasil() {
    const refRBSheet = useRef();
    const [states, setStates] = useState(null);
    const [load, setLoad] = useState(true);
    const [infEstado, setInfoEstado] = useState(null);


    useEffect(() => {
        async function load() {
            await getCasesBr().then((data) => {
                setStates(data);
                setLoad(false);
            }).catch(() => {
                setStates([]);
                setLoad(false);
            })

        }

        load();
    }, [])
    return (
        <>
            <Container>
                {load ? <View style={{ alignContent: "center" }}>
                    <Load size={50} color='#00CED1'></Load>
                </View> :
                    states["values"].map(element => {
                        return (
                            <>
                                <Row>
                                    <Card activeOpacity={0.4} onPress={() => {
                                        refRBSheet.current.open();
                                        setInfoEstado(element);
                                    }}>
                                        <RowCard>
                                            <ColState>
                                                <State>{element["state"]}</State>

                                            </ColState>
                                            <ColIcon>
                                                <IconRight />
                                            </ColIcon>
                                        </RowCard>
                                    </Card>

                                </Row>

                            </>
                        )
                    })
                }
                <Row style={{ height: 10}}></Row>
            </Container>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={300}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#3333"
                    }
                }}
            >

                {infEstado ? <>
                    <Container>
                        <RowCases>
                            <ColCases>
                                <CardCases>
                                    <TextCase>{infEstado["cases"]}</TextCase>
                                    <Title>
                                        <Text>Casos </Text>
                                    </Title>
                                </CardCases>
                            </ColCases>

                            <ColCases>
                                <CardCases>
                                    <TextCase> {infEstado["suspects"]}</TextCase>
                                    <Title>
                                        <Text>Suspeitos</Text>
                                    </Title>
                                </CardCases>
                            </ColCases>
                        </RowCases>

                        <RowCases>
                            <ColCases>
                                <CardCases>
                                    <TextCase> {infEstado["refuses"]}</TextCase>
                                    <Title>
                                        <Text>Descartados</Text>
                                    </Title>
                                </CardCases>
                            </ColCases>

                            <ColCases>
                                <CardCases>
                                    <TextCase> {infEstado["deaths"]}</TextCase>
                                    <Title>
                                        <Text>Mortes</Text>
                                    </Title>
                                </CardCases>
                            </ColCases>
                        </RowCases>
                    </Container>
                </> : null}

            </RBSheet>


        </>
    );
}

