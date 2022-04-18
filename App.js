import 'react-native-gesture-handler';
import {SafeAreaView, ScrollView, View, Text, TextInput} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';

import LoginScreens from './src/navigation/LoginScreens';
import MainScreens from './src/navigation/MainScreens';
import store from './src/store/createStore';
import {requestUserPermission} from './src/services/permissions';

function App() {
  const user = useSelector(state => state.user.loggedIn);
  let Navigator = !user ? LoginScreens : MainScreens;
  requestUserPermission();

  const MyTheme = {
    ...DarkTheme,
    colors: {
      background: 'transparent',
      opacity: 0.7,
    },
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Navigator />
      </View>
    </NavigationContainer>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <ToastProvider offsetTop={30} placement="top" duration={3000}>
          <App />
        </ToastProvider>
      </PaperProvider>
    </Provider>
  );
}

export default AppWrapper;
