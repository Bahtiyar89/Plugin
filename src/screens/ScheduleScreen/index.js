import React, {Fragment} from 'react';
import {ScrollView, View, Text, FlatList, Pressable} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import {FlatListDATA} from './mock';
import MainStyle from '../../utility/MainStyle';
import styles from './styles';
import User from '../../assets/user.svg';
import Activity from '../../assets/activity.svg';
import Clock from '../../assets/clock.svg';
import ChevronLeft from '../../assets/chevron-left.svg';

export default function SheduleScreen(props) {
  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  const renderFlatListItems = ({item}) => (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}>
        <Text style={styles.text}>{item.time}</Text>
        <Text style={styles.text}>{item.artist}</Text>
        <Text style={styles.text}>{item.scene}</Text>
      </View>
    </ScrollView>
  );

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <ChevronLeft style={{margin: 16}} width={14} height={14} />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Schedule</Text>
      </Appbar.Header>
      <View style={[styles.container]}>
        <View style={styles.borderBottom}>
          <View style={styles.iconText}>
            <Clock width={15} height={15} />
            <Text style={styles.text}>Time</Text>
          </View>

          <View style={styles.iconText}>
            <User width={15} height={15} />
            <Text style={styles.text}>Artist</Text>
          </View>
          <View style={styles.iconText}>
            <Activity width={14} height={25} />
            <Text style={styles.text}>Scene</Text>
          </View>
        </View>
        <FlatList
          style={{marginTop: 16}}
          nestedScrollEnabled
          data={FlatListDATA}
          renderItem={renderFlatListItems}
          keyExtractor={item => item.id}
        />
      </View>
    </Fragment>
  );
}
