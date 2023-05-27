import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Background from '../components/Background';
import Button from '../../components/Button/Button';
// import BackButton from '../components/BackButton';
import { theme } from '../../theme';
import { useStore } from '../../store/index.store';
import { TextInput } from 'react-native-paper';
import { observer } from 'mobx-react';
//import { Navigation } from '../types';


// type Props = {
//   navigation: Navigation;
// };

export const SignUpScreen = observer(({ navigation }: { navigation: any }) => {
  const store = useStore()
  const authStore = store.authStore
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  const handleSignUp = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (!emailError && !passwordError) {
      authStore.setUsername(userName)
      authStore.setPassword(password)
      authStore.setLastName(lastName)
      authStore.setFirstName(firstName)
      authStore.setEmail(email)
      authStore.setPhoneNumber(phoneNumber)
      authStore.register()
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
        label="User Name"
        value={userName}
        onChangeText={(text:string) => setUserName(text)}
      />

<TextInput
        label="Password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
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
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text: string) => setPhoneNumber(text)}
        textContentType="telephoneNumber"
        keyboardType="phone-pad"     
         />


      <Button mode="contained" onPress={handleSignUp} >
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
});

//export default memo(RegisterScreen);