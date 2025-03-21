/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import { Spinners } from '@core';

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) { 
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'PlaypenSans-Regular', fontSize: 18}}>HOLA SAPOS</Text>
      <Text style={{fontFamily: 'PlaypenSans-Light', fontSize: 15}}>HOLA MACACOS</Text>
      <Text style={{fontFamily: 'PlaypenSans-Bold', fontSize: 13}}>HOLA LUCEROS</Text>
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
