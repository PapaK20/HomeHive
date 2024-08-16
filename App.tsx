import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [loaded, error] = useFonts({
    'mon': require('./assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('./assets/fonts/Montserrat-SemiBold.ttf'), // Add other fonts if needed
    'mon-b': require('./assets/fonts/Montserrat-Bold.ttf'),
    'mon-l': require('./assets/fonts/Montserrat-Light.ttf'), // Add other fonts if needed
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  );
};

export default App;