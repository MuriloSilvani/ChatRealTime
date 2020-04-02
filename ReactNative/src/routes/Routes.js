import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const StackNavigator = (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='chat' component={Chat} />
    </Stack.Navigator>
);

import Login from '../pages/Login';
import Chat from '../pages/Chat';

export default function Routes() {
    return (
        <NavigationContainer>
            {StackNavigator}
        </NavigationContainer>
    );
}