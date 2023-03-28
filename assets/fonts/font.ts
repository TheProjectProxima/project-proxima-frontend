import { Platform } from 'react-native/types';

export const customFont = {
    customVariant: {
        fontFamily: Platform.select({
          web: 'Nunito Sans',
          ios: 'Nunito Sans',
          android: 'Nunito Sans',
          default: 'sans-serif',
        }),
        letterSpacing: 0.5,
        lineHeight: 22,
        fontSize: 20,
      }
}

