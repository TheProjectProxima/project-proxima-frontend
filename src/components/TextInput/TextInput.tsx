import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';

import { theme } from '../../theme';

export default function TextBox({ errorText, description, ...props } : {errorText:any, description:any}) {
    return (
      <View style={styles.container}>
        <Input
          style={styles.input}
          selectionColor={theme.colors.text.primary}
          underlineColor="transparent"
          mode="outlined"
          {...props}
        />
        {description && !errorText ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.bg.primary,
    },
    description: {
      fontSize: 13,
      color: theme.colors.text.secondary,
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: theme.colors.text.error,
      paddingTop: 8,
    },
  })