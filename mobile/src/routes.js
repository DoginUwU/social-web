import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Posts from './pages/Posts';
import Detail from './pages/Detail';

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}> 
                <AppStack.Screen name="Postagens" component={Posts} />
                <AppStack.Screen name="Detalhes" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}