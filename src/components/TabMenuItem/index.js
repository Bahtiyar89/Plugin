import React from 'react';
import {View, Image, Text, Platform} from 'react-native';

export default function TabMenuItem({source, focused, width, height, text}) {
  if (focused) {
    return (
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 0 : 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={source}
          resizeMode="contain"
          style={{
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: width,
            height: height,
            tintColor: focused ? '#7BC0AF' : '#fff',
          }}
        />

        <Text style={{color: focused ? '#7BC0AF' : '#fff', fontSize: 12}}>
          {text}
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 0 : 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={source}
          resizeMode="contain"
          style={{
            width: width,
            height: height,
            tintColor: focused ? '#7BC0AF' : '#fff',
          }}
        />
      </View>
    );
  }
}
