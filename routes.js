import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 

const Stack = createStackNavigator();

import HomeScreen from "./src/pages/Home";
import WorldScreen from "./src/pages/World";
import BrasilScreen from "./src/pages/Brasil";

const Router = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle:{
            elevation: 0,
        }}}>
            <Stack.Screen name="Menu" component={HomeScreen} options={{ headerTitle: 'CoronaINFO'}}></Stack.Screen>
            <Stack.Screen name="Mundo" component={WorldScreen}></Stack.Screen>
            <Stack.Screen name="Brasil" component={BrasilScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Router;