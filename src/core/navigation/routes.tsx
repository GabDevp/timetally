/* eslint-disable prettier/prettier */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, Profile, Register } from '@containers';

const headerShown = {headerShown: false}

export const Routes = () => {
    const Stack = createNativeStackNavigator();
    function AuthStack(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={headerShown} />
                <Stack.Screen name="Register" component={Register} options={headerShown} />
            </Stack.Navigator>
        )
    }

    const Tabs = createBottomTabNavigator();
    function TabStack(){
        return (
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={Home} options={headerShown} />
                <Tabs.Screen name="Profile" component={Profile} options={headerShown} />
            </Tabs.Navigator>
        )
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tabs' >
                <Stack.Screen name="Auth" component={AuthStack} options={headerShown} />
                <Stack.Screen name="Tabs" component={TabStack} options={headerShown} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}