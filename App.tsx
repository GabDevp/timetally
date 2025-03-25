/* eslint-disable prettier/prettier */
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Routes } from './navigation';

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
    <Routes/>
  );
}
