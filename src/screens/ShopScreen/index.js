import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {fakeLogout} from '../../store/mockUser/action';
import SignUpScreenTop from '../../components/SignUpScreenTop';

export default function ShopScreen() {
  const dispatch = useDispatch();

  const onLogoutPress = () => {
    dispatch(fakeLogout());
  };
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', color: 'tomato'}}>
        Hello ShopScreen
      </Text>
      <Button title="Logout" onPress={onLogoutPress} color="red" />
    </SafeAreaView>
  );
}
