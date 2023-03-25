import { Platform } from 'react-native/types';

const customFont = {
    customVariant: {
        fontFamily: Platform.select({
          web: 'Nunito Sans',
          ios: 'Nunito Sans',
          android: 'Nunito Sans',
          default: 'sans-serif',
        }),
        fontWeight: '400',
        letterSpacing: 0.5,
        lineHeight: 22,
        fontSize: 20,
      }
}
export default customFont