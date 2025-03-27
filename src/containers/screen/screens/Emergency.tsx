/* eslint-disable prettier/prettier */
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@core';

const gridData = [
    { id: '1', title: 'Policía', icon: '👮🏻‍♂️', phone: '123',color: '#2E86C1' },
    { id: '2', title: 'Bomberos', icon: '🚒', phone: '119',color: '#E74C3C' },
    { id: '3', title: 'Ambulancia', icon: '🚑', phone: '132', color: '#F39C12' },
    { id: '4', title: 'Transito Municipal', icon: '🚔', phone: '156', color: '#FFA500' },
    { id: '5', title: 'Gaula Antisecuestro', icon: '🕵🏻‍♂️', phone: '165', color: '#8B0000' },
    { id: '6', title: 'Maltrato Infantil', icon: '👶🏻', phone: '6022258600', color: '#FF69B4' },
];
export const Emergency = ({ navigation }: any) => {
    const { top } = useSafeAreaInsets();

    const handleCall = (phoneNumber: string) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={[styles.container, {paddingTop: top}]}>
            <Text style={styles.title}>Servicios de Emergencias</Text>
            <Text style={styles.subTitle}>¡Estamos aqui para ayudar! {'\n'} ¿A cual deseas llamar?</Text>
            <FlatList
                data={gridData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.item, { backgroundColor: item.color }]} onPress={() => handleCall(item.phone)}>
                        <Text style={styles.icon}>{item.icon}</Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.phone}>📞 {item.phone}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
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
        marginBottom: 30,
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
        textAlign: 'left',
        flexDirection: 'row',
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        fontFamily: 'PlaypenSans-Regular',
        textAlign: 'center',
        color: colors.white
    },
    listContainer: {
        paddingBottom: 20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3
    },
    icon: {
        fontSize: 40,
        marginRight: 15
    },
    textContainer: {
        flex: 1
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5
    },
    phone: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    }
})