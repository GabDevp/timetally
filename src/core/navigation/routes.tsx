/* eslint-disable prettier/prettier */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const headerShown = {headerShown: false}

export const Routes = () => {
    const Stack = createNativeStackNavigator();
    function AuthStack(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={() => <Text>Login</Text>} options={headerShown} />
                <Stack.Screen name="Register" component={() => <Text>Register</Text>} options={headerShown} />
            </Stack.Navigator>
        )
    }

    const Tabs = createBottomTabNavigator();
    function TabStack(){
        return (
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={() => <Text>Home</Text>} options={headerShown} />
                <Tabs.Screen name="Profile" component={() => <Text>Profile</Text>} options={headerShown} />
            </Tabs.Navigator>
        )
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' >
                <Stack.Screen name="Auth" component={AuthStack} options={headerShown} />
                <Stack.Screen name="Tabs" component={TabStack} options={headerShown} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}