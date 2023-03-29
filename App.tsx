import { StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { primaryTheme }  from './src/theme/paper.theme'
import { PicLinkNavigation } from './src/navigation';
 


export default function App() {
  return (
    <PaperProvider theme={primaryTheme}>
      <SafeAreaProvider>
        <PicLinkNavigation/>
      </SafeAreaProvider>
      </PaperProvider>


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


