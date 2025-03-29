/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AvailableDates {
    [date: string]: { disabled: boolean };
}

export const Book = ({ route, navigation }: any) => {
    const { top } = useSafeAreaInsets();
    const { userData, itemData } = route.params;
    
    const availableDates: AvailableDates = {
        '2023-12-15': { disabled: false },
        '2023-12-16': { disabled: false },
        '2023-12-17': { disabled: true },
        '2023-12-18': { disabled: false },
    };

    const [selectedDate, setSelectedDate] = useState('');

    const handleConfirm = () => {
        Alert.alert(
        'Reserva Confirmada',
        `Cliente: ${userData.name}\nServicio: ${itemData.title}\nFecha: ${selectedDate}`,
        [
            {
            text: 'OK',
            onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Tabs', params: { screen: 'HomeMain', params: userData } }] }),
            },
        ],
        { cancelable: false }
        );
    };

    const handleCancel = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Tabs', params: { screen: 'HomeMain'} }]
        });
    };

    return (
        <ScrollView style={[styles.container, {paddingTop: top + 30}]}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Información del Cliente</Text>
                <View style={styles.infoCard}>
                <Text style={styles.infoText}>Nombre: {userData.firstName} {userData.lastName}</Text>
                <Text style={styles.infoText}>Teléfono: {userData.phone}</Text>
                <Text style={styles.infoText}>Email: {userData.email}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Detalles de la Reserva</Text>
                <View style={styles.infoCard}>
                <Text style={styles.infoText}>Cancha: {itemData.title}</Text>
                <Text style={styles.infoText}>Tipo: {itemData.subtitle}</Text>
                <Text style={styles.infoText}>Precio: {itemData.price}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Selecciona una Fecha</Text>
                <Calendar
                minDate={new Date().toISOString().split('T')[0]}
                markedDates={{
                    ...availableDates,
                    [selectedDate]: { selected: true, selectedColor: '#4CAF50' }
                }}
                onDayPress={(day: string) => {
                    if (!availableDates[day]?.disabled) {
                        let dayString = JSON.stringify(day);
                        let dayString2 = dayString.slice(72, 82);
                        setSelectedDate(dayString2);
                    }
                }}
                theme={{
                    calendarBackground: '#fff',
                    textSectionTitleColor: '#2c3e50',
                    todayTextColor: '#4CAF50',
                    dayTextColor: '#2c3e50',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#4CAF50',
                    selectedDayBackgroundColor: '#4CAF50',
                    selectedDayTextColor: '#fff',
                    arrowColor: '#4CAF50',
                }}
                style={styles.calendar}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel} >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.confirmButton, !selectedDate && styles.disabledButton]} onPress={handleConfirm} disabled={!selectedDate} >
                    <Text style={styles.buttonText}>
                        {selectedDate ? `Confirmar (${selectedDate})` : 'Selecciona fecha'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Horario: 8:00 AM - 11:00 PM</Text>
                <Text style={[styles.footerText, {marginBottom: 30}]}>Políticas de cancelación: Antes de iniciar el juego.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
        fontFamily: 'PlaypenSans-Bold',
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoText: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 6,
        fontFamily: 'PlaypenSans-Regular',
    },
    calendar: {
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#e74c3c',
        marginRight: 10,
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        marginLeft: 10,
    },
    disabledButton: {
        backgroundColor: '#95a5a6',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'PlaypenSans-Bold',
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