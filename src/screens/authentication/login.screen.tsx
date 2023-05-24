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
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = () => {
    const passwordError = passwordValidator(password);
    if (!passwordError) {    
      authStore.setUsername(userName)
      authStore.setPassword(password)
      authStore.login()
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
        label="Username"
        returnKeyType="next"
        value={userName}
        onChangeText={(text:string) => setUserName(text)}
        autoCapitalize="none"
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

