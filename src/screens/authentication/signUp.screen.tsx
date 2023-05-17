import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Background from '../components/Background';
import Button from '../../components/Button/Button';
// import BackButton from '../components/BackButton';
import { theme } from '../../theme';
import { useStore } from '../../store/index.store';
import { TextInput } from 'react-native-paper';
//import { Navigation } from '../types';


// type Props = {
//   navigation: Navigation;
// };

export const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const store = useStore()
  const authStore = store.authStore
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const _onSignUpPressed = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (!emailError && !passwordError) {
      authStore.setIsAuthenticated(true)
      // authStore.sign up
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
        label="User Name"
        value={userName}
        onChangeText={(text:string) => setUserName(text)}
      />

      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={(text:string) => setFirstName(text)}
      />

      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={(text:string) => setLastName(text)}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text:string) => setEmail(text)}
        autoCapitalize="none"
        //autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
      />

      <Button mode="contained" >
        Sign Up
      </Button>

      <View >
        <Text >Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//export default memo(RegisterScreen);