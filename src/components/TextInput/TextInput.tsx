import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../../theme';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

// const TextInput = ({ errorText, ...props }: Props) => (
//   <View >
//     <Input
//       {...props}
//     />
//     {errorText ? <Text>{errorText}</Text> : null}
//   </View>
// );

// export default memo(TextInput);