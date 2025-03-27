/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { colors } from '@core';

const gridData = [
    { id: '1', title: 'Emergencias', icon: '🚨', screen: 'HomeEmergency' },
    { id: '2', title: 'Reservar Futbol', icon: '⚽', screen: '' },
    { id: '3', title: 'Reservar Voley', icon: '🏐', screen: '' },
    { id: '4', title: 'Reservar Cumpleaños/eventos', icon: '🎊', screen: '' },
    { id: '5', title: 'Reservar Uñas', icon: '💅🏻', screen: '' },
    { id: '6', title: 'Reservar taxi', icon: '🚕', screen: '' },
    { id: '7', title: 'Reservar Comida', icon: '🍽️', screen: '' },
    { id: '8', title: 'Reservar Hospedaje', icon: '🏨', screen: '' },
    { id: '9', title: 'Reservar Fotografia', icon: '📸', screen: '' },
    { id: '10', title: 'Reservar Veterineria', icon: '🐶', screen: '' },
    { id: '11', title: 'Reservar Peluqueria', icon: '💇🏻‍♂️', screen: '' },
    { id: '12', title: 'Reservar Boda', icon: '👰🏻', screen: '' },
    { id: '13', title: 'Funerarias', icon: '⚰️', screen: 'Funerary' },
    { id: '14', title: 'Citas Agendadas', icon: '📅', screen: '' },
];

export const Home = ({ route, navigation }: any) => {
    const { top } = useSafeAreaInsets();
    const params = route.params
    console.log(params);
    
    return (
        <View style={[styles.container, {paddingTop: top}]}>
            {params.gender === 'female' ? <Text style={styles.title}>Bienvenida {params.firstName}</Text> : <Text style={styles.title}>Bienvenido {params.firstName}</Text>}
            <Text style={styles.subTitle}>¿Que deseas hacer hoy?</Text>
            <FlatList
                data={gridData}
                numColumns={2} // Número de columnas
                columnWrapperStyle={styles.gridRow}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate(item.screen)}>
                        <Text style={styles.gridIcon}>{item.icon}</Text>
                        <Text style={styles.gridText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.gridContainer}
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
        marginBottom: 20,
        marginTop: 20
    },
    text: {
        fontSize: 15,
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
    },
    gridContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    gridRow: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    gridItem: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    gridIcon: {
        fontSize: 40,
        marginBottom: 8,
    },
    gridText: {
        fontSize: 16,
        fontFamily: 'PlaypenSans-Regular',
        textAlign: 'center',
    },
})