/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button as RNButton, Alert } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { API_URL, Button, Input, makeHttpRequest, Spinners } from '@core';

export const Login = ({ navigation }: any) => {
    const { top } = useSafeAreaInsets();

    const [loading, setLoading] = React.useState(false);
    const [usr, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function onSubmit() {
        if (!usr || !password) {
            Alert.alert('Error', 'Surgion un error en uno de los campos, verificalos e intenta de nuevo');
            return
        }
        setLoading(true);
        try {
            const response = await makeHttpRequest({
                host: API_URL,
                path: 'auth/login',
                method: 'POST',
                body: {
                    username: usr.toLowerCase().trim(),
                    password: password.toLowerCase().trim(),
                },
            })
            if (!response) {
                Alert.alert('Error', 'Surgion un error al iniciar sesion' + response.body);
                return
            }else{
                const datos = await makeHttpRequest({
                    host: API_URL,
                    path: 'auth/me',
                    token: response.accessToken,
                    method: 'GET',
                })
                if (!datos) {
                    Alert.alert('Error', 'Surgion un error' + datos.body);
                    return
                }
                navigation.reset({ index: 0, routes: [{ name: 'Tabs', params: { screen: 'HomeMain', params: datos } }] });
            }
        } catch (error: any) {
            Alert.alert('Error', error.message)
        }
        setLoading(false);
    }

    return (
        <View style={[styles.container, {paddingTop: top + 50}]}>
            <Text style={styles.title}>Inicia Sesion</Text>
            <View style={styles.input}>
                <Text style={styles.label}>Username</Text>
                <Input value={usr} onChange={setUser}  />
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Password</Text>
                <Input value={password} onChange={setPassword} />
            </View>
            <View style={styles.button}>
                {loading 
                ? <Spinners /> : 
                <Button onPress={() => onSubmit()} title="Iniciar Sesion"></Button>
                }
                <RNButton onPress={() => navigation.navigate('Register')} title="Crear Cuenta"></RNButton>
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