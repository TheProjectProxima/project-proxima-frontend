import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import Background from '../components/Background/Background';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
// import BackButton from '../components/BackButton/BackButton';
import { theme } from '../../theme';
import { observer } from 'mobx-react';
import { useStore } from '../../store/index.store';
//import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };

export const LoginScreen = observer(({ navigation }:{navigation:any}) => {
  const store = useStore()
  const authStore = store.authStore

  const _onLoginPressed = () => {
    const emailError = emailValidator(authStore.email);
    const passwordError = passwordValidator(authStore.password);

    if (!emailError && !passwordError) {
      authStore.setIsAuthenticated(true)
      // authStore.login
    }

  };


 

 const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

 const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

  return (
    <View>
      {/* <BackButton goBack={() => navigation.navigate('HomeScreen')} /> */}

      <TextInput
        label="Email"
        returnKeyType="next"
        value={authStore.email}
        onChangeText={(text:string) => authStore.setEmail(text)}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={authStore.password}
        onChangeText={(text:string) => authStore.setPassword(text)}
        secureTextEntry
      />

      <View >
        <TouchableOpacity
        >
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

