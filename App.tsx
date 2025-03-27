/* eslint-disable prettier/prettier */
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Routes } from './navigation';

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans/PlaypenSans-Light.ttf'),
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans/PlaypenSans-Bold.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
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
