/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react';

import { colors, Spinners } from '@core';

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
      <Button title="Press me" onPress={() => Alert.alert('Pressed')} />
      <TouchableOpacity 
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => Alert.alert('Pressed')}
      >
        <Text style={{color: 'white'}} >Press me</Text>
      </TouchableOpacity>
      <ActivityIndicator size="large" color={colors.primary} />
      <TextInput style={{borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 10, width: 200}} placeholder="Email" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
});
