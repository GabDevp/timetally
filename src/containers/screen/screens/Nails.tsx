/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const canchas = [
    { id: '1', title: 'Limpieza de manos y pies', subtitle: 'Servicio de solo limpieza para manos y pies', icon: '🫶🏻', price: '$40' },
    { id: '2', title: 'Limpieza de manos', subtitle: 'Servicio de solo limpieza para manos', icon: '🤲🏻', price: '$15' },
    { id: '3', title: 'Limpieza de pies', subtitle: 'Servicio de solo limpieza para pies', icon: '🦶🏻', price: '$20' },
    { id: '4', title: 'Manicure', subtitle: 'Servicio de solo aplicación de gel para manos', icon: '💅🏻', price: '$35' },
    { id: '5', title: 'Pedicure', subtitle: 'Servicio de solo aplicación de gel para pies', icon: '💅🏻', price: '$40' },
    { id: '6', title: 'Servicio completo', subtitle: 'Servicio completo de manos y pies', icon: '💁🏻‍♀️', price: '$80' },
];

export function Nails({ navigation, route }: any) {
    const { top } = useSafeAreaInsets();
    const { userData } = route.params
    console.log(userData);
    

    const handleSelectOption = (selectedItem: any) => {
        navigation.navigate('Book', {
            userData: { ...userData },
            itemData: selectedItem
        });
    };

    return (
        <View style={[styles.container, {paddingTop: top}]}>
            <View style={styles.header}>
                <Text style={styles.title}>Agenda tu cita de Uñas</Text>
                <Text style={styles.subtitle}>Selecciona el tipo de servicio</Text>
            </View>
            <FlatList
                data={canchas}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => handleSelectOption(item)} >
                        <Text style={styles.cardIcon}>{item.icon}</Text>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                        <Text style={styles.cardPrice}>{item.price}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
            {/* <View style={styles.footer}>
                <Text style={styles.footerText}>Horario: 8:00 AM - 11:00 PM</Text>
                <Text style={styles.footerText}>Políticas de cancelación: Antes de iniciar el juego.</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16
    },
    header: {
        marginBottom: 24,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        fontFamily: 'PlaypenSans-Bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
        marginTop: 8,
        fontFamily: 'PlaypenSans-Regular'
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16
    },
    listContainer: {
        paddingBottom: 20
    },
    card: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16
    },
    cardIcon: {
        fontSize: 36,
        marginBottom: 8
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2c3e50',
        fontFamily: 'PlaypenSans-Bold'
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#7f8c8d',
        textAlign: 'center',
        marginVertical: 4,
        fontFamily: 'PlaypenSans-Regular'
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#27ae60',
        fontFamily: 'PlaypenSans-Bold'
    },
    footer: {
        marginTop: 'auto',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#ecf0f1'
    },
    footerText: {
        fontSize: 12,
        color: '#95a5a6',
        textAlign: 'center',
        marginBottom: 4,
        fontFamily: 'PlaypenSans-Regular'
    }
});