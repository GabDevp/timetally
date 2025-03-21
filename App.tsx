/* eslint-disable prettier/prettier */
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useEffect } from 'react';

import { colors, Spinners } from '@core';
import { Button, Input } from 'core/components';

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
      <Input value='' onChange={(value) => console.log(value)} />
      <Button onPress={() => console.log('Button Pressed')} title="Button"></Button>
      <Spinners />
      <ActivityIndicator size="large" color={colors.primary} />
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
