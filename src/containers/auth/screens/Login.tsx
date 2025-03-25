/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button as RNButton } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Button, Input } from '@core';

export const Login = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: top + 50}]}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.input}>
                <Text style={styles.label}>Email</Text>
                <Input value='' onChange={(value) => console.log(value)}  />
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Password</Text>
                <Input value='' onChange={(value) => console.log(value)} />
            </View>
            <View style={styles.button}>
                <Button onPress={() => console.log('Login')} title="Iniciar Sesion"></Button>
                <RNButton onPress={() => console.log('Register')} title="Crear Cuenta"></RNButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 100,
        fontFamily: 'PlaypenSans-Bold',
        textAlign: 'center', 
    },
    input: {
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'PlaypenSans-Regular',
        textAlign: 'center',
    },
    button: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    }
})