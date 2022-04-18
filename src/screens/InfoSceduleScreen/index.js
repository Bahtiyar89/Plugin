import React, {Fragment, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import MainStyle from '../../utility/MainStyle';

export default function InfoSceduleScreen(props) {
  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.appBarHeader}>
        <IconButton
          icon="chevron-left"
          color={'#fff'}
          size={20}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.appBarHeaderText}>Info Stand</Text>
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={[styles.textHeader, {marginTop: 10}]}>ADDRESS</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            pellentesque amet.
          </Text>
          <View style={styles.horizontalLine} />
          <Text style={[styles.textHeader, {marginTop: 24}]}>DETAILS</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec vitae
            feugiat auctor urna ac vitae purus ac. Sit parturient viverra morbi
            ullamcorper arcu integer ultricies varius. Sit eu maecenas
            adipiscing parturient vitae sed. Quam nibh eget in gravida
            consequat. Congue tellus molestie amet sit. At lorem venenatis
            mauris porttitor lorem velit. Risus et morbi dui malesuada id.
            Elementum rutrum elit ut montes, tempor vel eget. Nibh non, diam id
            eu tempor aliquam arcu. Dui aliquam a sem.
          </Text>
          <View style={styles.horizontalLine} />
          <Image
            style={{
              marginTop: 24,
              height: 214,
              width: '100%',
              alignSelf: 'center',
            }}
            resizeMode="stretch"
            source={require('../../assets/garden.png')}
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
