import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Register} from '../pages'
import BottomTabNavigator from '../components/BottomTabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}} />
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
