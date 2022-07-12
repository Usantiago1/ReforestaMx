import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon, Tab, TabBar, TabView } from "@ui-kitten/components";

//Screens 
import Login from './src/Screens/Login';
import AddUser from './src/Screens/AddUser';

import Home from "./src/TabScreen/Home";
import Prueba1 from "./src/TabScreen/Prueba1";
import Prueba2 from "./src/TabScreen/Prueba2";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const personIcon = (props) =>(
    <Icon {...props} name='person-outline'></Icon>
);

const globeIcon = (props) => (
    <Icon {...props} name='globe-2-outline'></Icon>
)



function MyTab () {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <>
        <TabView selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
            <Tab title='prueba1' icon={personIcon}>
                <Prueba1></Prueba1>
            </Tab>

            <Tab title='prueba2' icon={globeIcon}>
                <Prueba2></Prueba2>
            </Tab>
        </TabView>
     

</>
    )
}


function MyStack () {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="Iniciar Sesión" component={Login}/>
                <Stack.Screen name="Crear Cuenta" component={AddUser}/>
                <Stack.Screen name="Reforesta MX" component={MyTab}/>
            </Stack.Navigator>
        
        </>
    )
}


const Navigation = () =>{
    return(
        <>
        <NavigationContainer>
            <MyStack/>
            
        </NavigationContainer>
        </>

    )
}
export default Navigation;