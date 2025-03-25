/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'

export const Home = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: top}]}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subTitle}>Planes y servicios</Text>
            <Text style={styles.subTitle}>Reservas</Text>
            
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
        fontFamily: 'PlaypenSans-Bold',
        textAlign: 'center', 
    },
    subTitle: {
        fontSize: 18,
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