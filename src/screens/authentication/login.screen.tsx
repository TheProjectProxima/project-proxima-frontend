import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import Background from '../components/Background/Background';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
// import BackButton from '../components/BackButton/BackButton';
import { theme } from '../../theme';
//import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };

export const LoginScreen = ({ navigation }:{navigation:any}) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
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

 const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

  return (
    <View>
      {/* <BackButton goBack={() => navigation.navigate('HomeScreen')} /> */}

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text:string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text:string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.ui.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
});

