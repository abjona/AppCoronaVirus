import React, { useEffect, useState, useRef } from 'react';

import { 
    Container, 
    Load,
    TextCase, 
    Row, 
    Text, 
    Title, 
    IconRight, 
    Card, 
    State, 
    RowCard, 
    ColState, 
    ColIcon, 
    CardCases, 
    RowCases, 
    ColCases,
    Search
} from './styles';
import { getCasesBr } from "./../../services/apiService";

import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Brasil() {
    const refRBSheet = useRef();
    const [arrayList, setArrayList] = useState(null);
    const [states, setStates] = useState(null);
    const [load, setLoad] = useState(true);
    const [infEstado, setInfoEstado] = useState(null);


    const searchState = async (text) =>{
            const val = text;
              if(val && val.trim() != ''){
                  var search = arrayList.filter((item)=>{
                    return (item["state"].toLowerCase().indexOf(val.toLowerCase()) > -1);
                  });
                  await setStates(search);
              }else{
                await setStates(arrayList);
              }
          
    }

    useEffect(() => {
        async function load() {
            await getCasesBr().then((data) => {
                setStates(data["values"]);
                setArrayList(data["values"]);
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
                <Search onChangeText={(text)=>{ searchState(text)}} placeholder="Pesquise aqui"></Search>
                {load ? <View style={{ alignContent: "center" }}>
                    <Load size={50} color='#333'></Load>
                </View> :
                    states.map(element => {
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
                        backgroundColor: "#3333"
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

