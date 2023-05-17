import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PicLinkNavigation } from './src/navigation';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { StoreProvider, rootStore } from './src/store/index.store';
import React from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  if (!fontsLoaded) {
    return (<AppLoading/>)
  }
  else {
    return (
      <StoreProvider value={rootStore}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <PicLinkNavigation/>
        </SafeAreaProvider>
      </ThemeProvider>
      </StoreProvider>  
    ); 
  }
}