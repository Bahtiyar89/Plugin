import React, {Fragment, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';
import ImageZoom from 'react-native-image-pan-zoom';

import {colorList} from '../../utility/GradientColors';
import MainStyle from '../../utility/MainStyle';
import styles from './styles';
import ChevronLeft from '../../assets/chevron-left.svg';

export default function MapScreen(props) {
  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <ChevronLeft style={{margin: 16}} width={14} height={14} />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Map</Text>
      </Appbar.Header>
      <View style={[styles.container]}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width - 20}
          cropHeight={Dimensions.get('window').height}
          imageWidth={250}
          imageHeight={500}>
          <ImageBackground
            style={{
              fontFamily: 'TransatStandard',
              justifyContent: 'center',
              width: 200,
              height: 200,
            }}
            source={require('../../assets/Frame.png')}
            resizeMode="stretch"></ImageBackground>
        </ImageZoom>
      </View>
    </Fragment>
  );
}
