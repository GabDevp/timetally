/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@core';

export const Profile  = ({ route, navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const params = route.params.params
  console.log(params);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.title}>Datos Personales</Text>
      {params?.image && (
        <Image
          source={{ uri: params.image }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.text}>Nombre y Apellido: {params.firstName} {params.lastName}</Text>
      <Text style={styles.text}>Email: {params.email} </Text>
      <Text style={styles.text}>Telefono: {params.phone} </Text>
      <Text style={styles.text}>Cumpleaños: {params.birthDate} </Text>
      <Text style={styles.text}>Edad: {params.age} </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Auth' }] })}>
          <Text style={styles.label}> Cerrar Sesion </Text>
        </TouchableOpacity>
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
      fontSize: 22,
      fontWeight: 'bold',
      fontFamily: 'PlaypenSans-Bold',
      textAlign: 'center',
      marginBottom: 30,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 15,
    height: 45,
    width: '45%',
    alignSelf: 'center',
  },
  logoutButton: {
    backgroundColor: colors.tertiary,
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    width: '45%',
    alignSelf: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.primary, // Usando tu color primario
  },
})