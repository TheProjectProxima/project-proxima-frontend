import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import Background from '../components/Background/Background';
import Button from '../../components/Button/Button';
// import BackButton from '../components/BackButton/BackButton';
import { theme } from '../../theme';
import { observer } from 'mobx-react';
import { useStore } from '../../store/index.store';
import userService from '../../services/user.service';
import { TextInput } from 'react-native-paper';
//import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };

export const LoginScreen = observer(({ navigation }:{navigation:any}) => {
  const store = useStore()
  const authStore = store.authStore
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

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
        value={email}
        onChangeText={(text:string) => setEmail(text)}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text:string) => setPassword(text)}
        secureTextEntry
      />

      <View >
        <TouchableOpacity
        >
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>

      <View>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => {authStore.clear(), navigation.navigate('SignUp')}}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

