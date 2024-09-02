import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Split Bill Page'>
                <Stack.Screen name='Split Bill Page' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

