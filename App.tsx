/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { Spinners } from '@core';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOLA SAPOS</Text>
      <StatusBar style="auto" />
      <Spinners />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
