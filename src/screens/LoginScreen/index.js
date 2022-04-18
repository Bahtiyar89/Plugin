import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RadialGradient} from 'react-native-gradients';
import {useToast} from 'react-native-toast-notifications';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import styles from './styles';
import {Appbar} from 'react-native-paper';
import Logo from '../../assets/logo.svg';

import Mail from '../../assets/mail.svg';
import Google from '../../assets/google-logo.svg';
import AppleIcon from '../../assets/appleIcon.svg';
//import {fakeLogin} from '../../store/mockUser/action';
import {userLogin} from '../../store/user/action';

export default function SignUpScreen({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.loggedIn);
  const [screenStatus, setScreenStatus] = useState('login');
  const [passwordInputSecure, setPasswordInputSecure] = useState(true);

  const [email, seTemail] = useState('');
  const [pass, setPass] = useState('');
  const [canComplete, seTcanComplete] = useState(false);

  const [emailBgColor, seTemailBgColor] = useState(false);
  const [passBgColor, seTpassBgColor] = useState(false);

  const onSetScreenStatus = () => {
    setScreenStatus(screenStatus === 'signup' ? 'login' : 'signup');
  };

  const onPassReveal = () => {
    setPasswordInputSecure(prev => !prev);
    console.log('onPassReveal ', passwordInputSecure);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const colorList = [
    {offset: '0%', color: '#003143', opacity: '1'},
    {offset: '44.33%', color: '#003143', opacity: '1'},
    {offset: '50%', color: '#003143', opacity: '1'},
    {offset: '100%', color: '#00131A', opacity: '1'},
  ];
  const BackgroundGradient = ({style, children}) => (
    <View
      style={[style, {position: 'absolute', width: '100%', height: '100%'}]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  const validation = () => {
    let err = false;

    if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
      err = true;
      seTemailBgColor(true);
      toast.show('Please enter a valid email address');
      return err;
    }
    if (pass.length < 2) {
      err = true;
      seTpassBgColor(true);
      toast.show('Entered password is incorrect. Try again');
      return err;
    }
    return err;
  };

  const onLoginPress = () => {
    const err = validation();

    if (err) {
    } else {
      seTcanComplete(true);
      dispatch(userLogin());
      //  dispatch(fakeLogin());
    }
  };

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header
        style={{
          backgroundColor: '#00131A',
          borderBottomWidth: 1,
          borderBottomColor: '#003143',
        }}>
        <View style={{width: '100%'}}>
          <Logo style={{alignSelf: 'center'}} width={24} height={24} />
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <Text style={styles.haveAnAccountText}>
                Don't have an Account?
              </Text>
              <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.logInSignUpButton}>Sign Up</Text>
              </Pressable>
            </View>
            <View style={styles.titleContainer}>
              <Text style={[styles.title]}>
                Hi, please
                <Text style={styles.blueColor}> Log In!</Text>
              </Text>

              <Text style={styles.message}>
                Commodo pharetra in mollis bibendum ut.
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.legend}>Email Address</Text>
              <View
                style={[
                  styles.searchSection,
                  emailBgColor && styles.inputError,
                ]}>
                <Mail width={24} height={24} />
                <TextInput
                  value={email}
                  onChangeText={val => {
                    seTemail(val);
                    seTemailBgColor(false);
                  }}
                  placeholderTextColor={'#999CA0'}
                  placeholder="john.doe@address.com"
                  style={[styles.inputEmail, emailBgColor && styles.inputError]}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.legend}>Password</Text>

              <View style={styles.inputWrapper}>
                <TextInput
                  value={pass}
                  onChangeText={val => {
                    setPass(val);
                    seTpassBgColor(false);
                  }}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                  secureTextEntry={passwordInputSecure}
                  style={[styles.input, passBgColor && styles.inputError]}
                />
                <Pressable
                  onPress={onPassReveal}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>
                    {passwordInputSecure ? 'Show' : 'Hide'}
                  </Text>
                </Pressable>
              </View>
            </View>

            <Pressable
              onPress={onForgotPasswordPress}
              hitSlop={6}
              style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>
                Forgot Password
              </Text>
            </Pressable>

            <Pressable
              onPress={onLoginPress}
              style={[
                styles.completeButton,
                !canComplete && styles.completeInactive,
              ]}>
              <Text style={styles.completeButtonText}>Log In</Text>
            </Pressable>

            <View style={styles.separate}>
              <View style={styles.separateLine} />
              <Text style={styles.separateText}>or</Text>
              <View style={styles.separateLine} />
            </View>

            <Pressable style={[styles.socialMediaButton, styles.google]}>
              {Platform.OS === 'android' ? (
                <>
                  <Google width={24} height={24} style={styles.googleIcon} />
                  <Text style={styles.socialMediaButtonText}>Google</Text>
                </>
              ) : (
                <>
                  <AppleIcon width={24} height={24} style={styles.googleIcon} />
                  <Text style={styles.socialMediaButtonText}>Apple ID</Text>
                </>
              )}
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
