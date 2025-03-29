/* eslint-disable prettier/prettier */
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const taxiServices = [
  { id: '1',title: 'Taxi Los Tolues', icon: '🚖', phone: '6022359996', color: '#FFC107', rating: '4.3 ★' },
  { id: '2',title: 'Taxi Villa Cespedes', icon: '🚕', phone: '3122847986', color: '#2196F3', rating: '4.0 ★' },
  { id: '3', title: 'Taxi Ejecutivo', icon: '🚘', phone: '000000000', color: '#4CAF50', rating: '4.5 ★' },
  { id: '4', title: 'Moto Taxi', icon: '🏍️', phone: '3183242865', color: '#FF6D00', rating: '5.0 ★' },
  { id: '5',title: 'Taxis 24/7', icon: '🌙', phone: '6022255161', color: '#673AB7', rating: '4.8 ★' },
  // { id: '6',title: 'Taxi Aeropuerto', icon: '✈️', phone: '6056789012', color: '#00BCD4', rating: '4.6 ★' }
];

export const Taxis = () => {
  const { top } = useSafeAreaInsets();

  const handleCall = (phoneNumber: string) => {
      Linking.openURL(`tel:${phoneNumber}`);
  };

  // const handleBook = (serviceId: string) => {
  //     // Lógica para reserva (puedes implementar navegación a otra pantalla)
  //     console.log("Reservar servicio:", serviceId);
  // };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Servicios de Taxi</Text>
            <Text style={styles.subHeader}>Conductores verificados • 24/7</Text>
        </View>
        <FlatList
            data={taxiServices}
            renderItem={({ item }) => (
                <View style={[styles.card, { backgroundColor: item.color }]}>
                    {/* Icono y nombre */}
                    <View style={styles.serviceInfo}>
                        <Text style={styles.icon}>{item.icon}</Text>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.rating}>{item.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity 
                            style={styles.callButton}
                            onPress={() => handleCall(item.phone)}
                        >
                            <Text style={styles.buttonText}>Llamar</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity 
                            style={styles.bookButton}
                            onPress={() => handleBook(item.id)}
                        >
                            <Text style={styles.buttonText}>Reservar</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        />
        <Text style={styles.footer}>
            Tarifas calculadas por distancia • Pago en efectivo/tarjeta
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
      paddingHorizontal: 16
  },
  header: {
      marginBottom: 24,
      alignItems: 'center'
  },
  headerTitle: {
      fontSize: 28,
      fontWeight: '800',
      color: '#2C3E50',
      marginBottom: 4
  },
  subHeader: {
      fontSize: 16,
      color: '#7F8C8D',
      fontWeight: '500'
  },
  listContent: {
      paddingBottom: 32
  },
  card: {
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4
  },
  serviceInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
  },
  icon: {
      fontSize: 42,
      marginRight: 16
  },
  title: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFF',
      marginBottom: 4,
      textShadowColor: 'rgba(0,0,0,0.2)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2
  },
  rating: {
      fontSize: 14,
      color: '#FFF',
      fontWeight: '600'
  },
  actions: {
      flexDirection: 'row',
      gap: 8
  },
  callButton: {
      backgroundColor: 'rgba(255,255,255,0.3)',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.5)'
  },
  bookButton: {
      backgroundColor: '#FFF',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8
  },
  buttonText: {
      fontWeight: '600',
      fontSize: 14
  },
  footer: {
      textAlign: 'center',
      color: '#95A5A6',
      marginVertical: 16,
      fontSize: 14,
      fontStyle: 'italic'
  }
});