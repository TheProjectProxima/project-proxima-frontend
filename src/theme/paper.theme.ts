import { DefaultTheme, configureFonts } from 'react-native-paper'
import { customFont} from '../../assets/fonts/font'
export const primaryTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#034748',
    accent: '#11B5E4',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#001021',
    error: '#B71F0E',
    disabled: '#BEC6C6',
    placeholder: '#1481BA',
    backdrop: '#001021',
  },
//   fonts: configureFonts({config: customFont}),
  animation: { scale: 1.0 },
}


