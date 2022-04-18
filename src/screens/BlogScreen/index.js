import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import MainStyle from '../../utility/MainStyle';
import Logo from '../../assets/logo.svg';
import {FlatListDATA} from './mock';
import Child from './childComponent';

export default function BlogScreen(props) {
  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );
  console.log('props: ', props);
  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={MainStyle.appBarThreeItemBackground}>
        <Logo style={{marginLeft: 15}} width={24} height={24} />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Child navigation={props.navigation} flatListDATA={FlatListDATA} />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
