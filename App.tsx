import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { primaryTheme }  from './src/theme/paper.theme'
import { PicLinkNavigation } from './src/navigation';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

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
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <PicLinkNavigation/>
        </SafeAreaProvider>
      </ThemeProvider>

  
  
    ); 
  }
 
}


