import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import MainStyle from '../../utility/MainStyle';
import Logo from '../../assets/logo.svg';
import {FlatListDATA} from './mock';

export default function ChildComponent(props) {
  console.log('props:2 ', props);
  if (props.flatListDATA) {
    return props?.flatListDATA.map((data, i) => {
      return (
        <Pressable
          onPress={() => props.navigation.navigate('acticle', data)}
          key={i}
          style={
            i === props?.flatListDATA.length - 1 ? {marginBottom: 100} : {}
          }>
          <ImageBackground
            source={require('../../assets/concert0.jpg')}
            resizeMode="cover"
            borderRadius={12}
            style={styles.itemBackground}>
            <Text style={styles.itemTitle}>{data.title}</Text>
            <Text style={styles.itemText}>{data.text}</Text>
            <Text style={styles.itemSubText}>{data.subtext}</Text>
          </ImageBackground>
        </Pressable>
      );
    });
  } else {
    return <Text>text</Text>;
  }
}
