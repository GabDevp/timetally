/* eslint-disable prettier/prettier */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Emergency, Funerary, Futbol, Home, Login, Profile, Register, Taxis } from '@containers';
import { Book } from 'store/screens';

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

    const HomeStack = createNativeStackNavigator();

    function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }} >
            <HomeStack.Screen name="HomeMain" component={Home} />
            <HomeStack.Screen name="HomeEmergency" component={Emergency} />
            <HomeStack.Screen name="Funerary" component={Funerary} />
            <HomeStack.Screen name="Taxis" component={Taxis} />
            <HomeStack.Screen name="Futbol" component={Futbol} />
            {/* Agrega aquí todas las pantallas de servicios */}
        </HomeStack.Navigator>
    );
    }

    const Tabs = createBottomTabNavigator();
    function TabStack({ route } : any) {
        // Recibe parámetros de navegación
        const initialParams = route.params || {};
        return (
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 100 },
                    tabBarIcon: ({ focused, color, size }) => {
                        const iconName = route.name === 'Home' ? 'home' : 'person'
                        return (
                            <MaterialIcons name={iconName} size={25} color={focused ? 'black' : 'gray'} style={{ marginTop: 10 }}/>
                        )
                    },
                })}>
                <Tabs.Screen name="Home" component={HomeStackScreen} options={headerShown} initialParams={initialParams} />
                <Tabs.Screen name="Profile" component={Profile} options={headerShown} initialParams={initialParams} />
            </Tabs.Navigator>
        )
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' >
                <Stack.Screen name="Auth" component={AuthStack} options={headerShown} />
                <Stack.Screen name="Tabs" component={TabStack} options={headerShown} />
                <Stack.Screen name="Book" component={Book} options={headerShown} initialParams={{ userData: {}, itemData: {} }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}