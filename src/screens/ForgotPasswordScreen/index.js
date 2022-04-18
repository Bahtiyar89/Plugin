import React, {Fragment, useState} from 'react';
import {View, Text, SafeAreaView, Pressable, TextInput} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';

import styles from './styles';
import Mail from '../../assets/mail.svg';
import CheckEmailModal from '../../components/CheckEmailModal';
import Logo from '../../assets/logo.svg';

export default function ForgotPasswordScreen({navigation}) {
  const toast = useToast();
  const [email, seTemail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [canComplete, seTcanComplete] = useState(false);
  const [emailBgColor, seTemailBgColor] = useState(false);

  const onSignUpPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUpScreen'}],
    });
  };

  const onCancel = () => {
    setShowModal(false);
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

    return err;
  };

  const onGetEmailPress = () => {
    const err = validation();

    if (err) {
    } else {
      seTcanComplete(true);
      setShowModal(true);
    }
  };

  const onComplete = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.header}>
        <View style={{width: '100%'}}>
          <Logo style={{alignSelf: 'center'}} width={24} height={24} />
        </View>
      </Appbar.Header>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.haveAnAccountText}>Don't have an Account</Text>
          <Pressable onPress={onSignUpPress}>
            <Text style={styles.logInSignUpButton}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.blueColor]}>Forgot Password</Text>
          <Text style={styles.message}>
            Tristique faucibus ut feugiat habitant.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.legend}>Email Address</Text>
            <View
              style={[styles.searchSection, emailBgColor && styles.inputError]}>
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
          <Pressable
            onPress={onGetEmailPress}
            style={[
              styles.completeButton,
              !canComplete && styles.completeInactive,
            ]}>
            <Text style={styles.completeButtonText}>Get Password</Text>
          </Pressable>
        </View>
        {showModal && (
          <CheckEmailModal cancel={onCancel} complete={onComplete} />
        )}
      </SafeAreaView>
    </Fragment>
  );
}
