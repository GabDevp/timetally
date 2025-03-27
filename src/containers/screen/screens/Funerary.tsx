/* eslint-disable prettier/prettier */
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const funeral = [
    { id: '1',title: 'Funerales San Martin',icon: '⚰️', phone: '6022257463',color: '#5D4037' },
    { id: '2',title: 'Los Olivos',icon: '🕯️',phone: '6023456789',color: '#455A64' },
    { id: '3', title: 'Campo de Paz',icon: '⛪',phone: '6022244645',color: '#3E2723' },
    { id: '4',title: 'Jardines del Renacer',icon: '🌿',phone: '6023800914',color: '#37474F' },
];
export const Funerary = ({ navigation }: any) => {
    const { top } = useSafeAreaInsets();

    const handleCall = (phoneNumber: string) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Text style={styles.headerTitle}>Servicios Funerarios</Text>
            <Text style={styles.subHeader}>Asistencia las 24 horas</Text>
            <FlatList
                data={funeral}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.serviceCard, { backgroundColor: item.color }]} onPress={() => handleCall(item.phone)} activeOpacity={0.8}>
                        <Text style={styles.serviceIcon}>{item.icon}</Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.serviceName}>{item.title}</Text>
                            <View style={styles.phoneContainer}>
                                <Text style={styles.phoneIcon}>📞</Text>
                                <Text style={styles.phoneNumber}>{item.phone}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.footerText}>
                "Brindamos acompañamiento en sus momentos difíciles"
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    headerTitle: {
        fontSize: 26,
        fontFamily: 'PlayfairDisplay-Bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    subHeader: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Roboto-Regular',
    },
    listContainer: {
        paddingBottom: 30
    },
    serviceCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3
    },
    serviceIcon: {
        fontSize: 36,
        marginRight: 15,
        opacity: 0.9
    },
    textContainer: {
        flex: 1
    },
    serviceName: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#FFF',
        marginBottom: 5,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    phoneIcon: {
        fontSize: 18,
        marginRight: 8,
        color: '#FFF'
    },
    phoneNumber: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#EEE',
        letterSpacing: 0.5
    },
    footerText: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontStyle: 'italic',
        fontFamily: 'PlayfairDisplay-Regular'
    }
})