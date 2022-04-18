import React from 'react';
import {Pressable, Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';

export default function SignUpScreenTop({
  navigation,
  screenStatus,
  onSetScreenStatus,
}) {
  const haveAnAccountText = {
    signup: 'Already have an Account?',
    login: "Don't have an Account",
  };

  const logInSignUpText = {
    signup: 'Log In',
    login: 'Sign Up',
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.haveAnAccountText}>
            {haveAnAccountText[screenStatus]}
          </Text>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.logInSignUpButton}>
              {logInSignUpText[screenStatus]}
            </Text>
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          {screenStatus === 'signup' ? (
            <Text style={[styles.title, styles.blueColor]}>Sign Up</Text>
          ) : (
            <Text style={[styles.title]}>
              Hi, please
              <Text style={styles.blueColor}> Log In!</Text>
            </Text>
          )}
          <Text style={styles.message}>
            {screenStatus === 'login'
              ? 'Commodo pharetra in mollis bibendum ut.'
              : 'Tristique faucibus ut feugiat habitant.'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
