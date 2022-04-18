import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import Logo from '../assets/logo.svg';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const renderLoginScreenTitle = () => {
  return <Logo width={24} height={24} />;
};

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitle: renderLoginScreenTitle,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerTitle: renderLoginScreenTitle,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: renderLoginScreenTitle,
          headerLeft: () => <View />,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
