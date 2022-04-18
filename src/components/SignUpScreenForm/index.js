import {View, Text, TextInput, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {fakeLogin} from '../../store/mockUser/action';
import React, {useState} from 'react';
import styles from './styles';
import Mail from '../../assets/mail.svg';
import Google from '../../assets/google-logo.svg';

export default function SignUpScreenForm({
  screenStatus,
  passwordInputSecure,
  name,
  email,

  pass,
  onPassReveal,
  canComplete,
  onForgotPasswordPress,
}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.loggedIn);
  const [validated, seTvalidated] = useState(false);
  const logInSignUpText = {
    signup: 'Sign Up',
    login: 'Log In',
  };

  const onLoginPress = () => {
    /.+@.+\.[A-Za-z]+$/.test('rr@rr.com.tr');
    console.log('reg.test(email) 3 ', /.+@.+\.[A-Za-z]+$/.test('rr@rr.com.tr'));
    if (/.+@.+\.[A-Za-z]+$/.test(email) === false) {
      dispatch(fakeLogin());
    } else {
      seTvalidated(false);
    }
  };
  const [isKeyboardShow, seTisKeyboardShow] = useState(false);
  console.log('email', email);
  return (
    <View style={[styles.container, {marginTop: isKeyboardShow ? -90 : 0}]}>
      {screenStatus === 'signup' && (
        <View style={[styles.inputContainer, screenStatus === 'login']}>
          <Text style={styles.legend}>Name</Text>
          <TextInput
            value={name.name}
            onChangeText={name.setName}
            placeholderTextColor={'#999CA0'}
            placeholder="ex. Lisa"
            style={styles.input}
          />
        </View>
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.legend}>Email Address</Text>
        <View style={styles.searchSection}>
          <Mail width={24} height={24} />
          <TextInput
            value={email}
            onChangeText={email.seTemail}
            placeholderTextColor={'#999CA0'}
            placeholder="john.doe@address.com"
            style={[styles.input, styles.emailInput]}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.legend}>Password</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            value={pass.pass}
            onChangeText={pass.setPass}
            placeholderTextColor={'#999CA0'}
            placeholder="••••••••••"
            secureTextEntry={passwordInputSecure}
            style={styles.input}
          />
          <Pressable onPress={onPassReveal} style={styles.togglePassWrapper}>
            <Text style={styles.togglePassText}>
              {passwordInputSecure ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        </View>
      </View>
      {screenStatus === 'login' && (
        <Pressable
          onPress={onForgotPasswordPress}
          hitSlop={6}
          style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Forgot Password</Text>
        </Pressable>
      )}

      <Pressable
        onPress={onLoginPress}
        style={[
          styles.completeButton,
          !canComplete && styles.completeInactive,
        ]}>
        <Text style={styles.completeButtonText}>
          {logInSignUpText[screenStatus]}
        </Text>
      </Pressable>
      <View style={styles.separate}>
        <View style={styles.separateLine} />
        <Text style={styles.separateText}>or</Text>
        <View style={styles.separateLine} />
      </View>
      <View style={styles.socialMediaButtonsContainer}>
        <Pressable style={[styles.socialMediaButton, styles.google]}>
          <Google width={24} height={24} style={styles.googleIcon} />
          <Text style={styles.socialMediaButtonText}>Google</Text>
        </Pressable>
      </View>
    </View>
  );
}
