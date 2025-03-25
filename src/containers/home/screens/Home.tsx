/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { colors } from '@core';

export const Home = ({ route }: any) => {
    const { top } = useSafeAreaInsets();
    const params = route.params
    console.log(params);
    
    return (
        <View style={[styles.container, {paddingTop: top}]}>
            {params.gender === 'female' ? <Text style={styles.title}>Bienvenida {params.firstName}</Text> : <Text style={styles.title}>Bienvenido {params.firstName}</Text>}
            <Text style={styles.subTitle}>Datos personales</Text>
            <FlatList
                data={params.subs}
                renderItem={({ item }) => (
                    <View style={styles.text}>
                        <Text style={styles.text}>Empresa {item.name}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: 'white', fontFamily: 'PlaypenSans-Regular'}}>Mirar Informe</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
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
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'PlaypenSans-Bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'PlaypenSans-Regular',
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 20
    },
    text: {
        fontSize: 15,
        marginTop: 30,
        fontFamily: 'PlaypenSans-Regular',
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
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
        height: 35,
        display: 'flex',
        width: '50%',
        alignSelf: 'center',
        marginTop: 8
    }
})