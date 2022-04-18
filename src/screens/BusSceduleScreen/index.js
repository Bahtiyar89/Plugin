import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import {FlatListDATA} from './mock';
import MainStyle from '../../utility/MainStyle';
import Pin from '../../assets/pin.svg';
import Calendar from '../../assets/calendar.svg';
import ShevroletUpDown from '../../components/ShevroletUpDown';

export default function BusSceduleScreen(props) {
  const [activeTab, seTactiveTab] = useState('Blog');
  const [downButton, seTdownButton] = useState(false);
  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );
  const renderFlatListItems = ({item}) => (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.flatListIconContainer}>
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
        <IconButton
          icon="chevron-left"
          color={'#fff'}
          size={20}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.appBarHeaderText}>Bus Schedule</Text>
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                {
                  width: '47%',
                  backgroundColor:
                    activeTab === 'Blog' ? '#00AEEF' : 'transparent',
                },
              ]}
              onPress={() => seTactiveTab('Blog')}>
              <Text style={styles.tabButtonText}>To LS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                {
                  width: '47%',
                  backgroundColor:
                    activeTab === 'Tickets' ? '#00AEEF' : 'transparent',
                },
              ]}
              onPress={() => seTactiveTab('Tickets')}>
              <Text style={styles.tabButtonText}>From LS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.locationIcons}>
            <View style={styles.spaceBetweenIcons}>
              <Pin style={{marginLeft: 20}} width={14} height={14} />
              <Pin width={14} height={14} />
              <Pin width={14} height={14} />
              <Pin style={{marginRight: 20}} width={14} height={14} />
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.spaceBetweenTexts}>
              <Text style={{color: '#fff'}}>{`Stavanger \nBussterminal`}</Text>
              <Text style={{fontSize: 12, color: '#fff'}}>
                {`LS:Hotel\n  Energy`}
              </Text>
              <Text style={{fontSize: 12, color: '#fff'}}>
                {`Sandness \n Sentrum`}
              </Text>
              <Text style={{fontSize: 12, color: '#fff'}}>
                {`Landstreff \n Stavanger`}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                height: downButton ? 400 : 70,
              }}>
              <ShevroletUpDown
                onPassReveal={() => seTdownButton(!downButton)}
                downButton={downButton}
              />

              <View style={styles.calendarText}>
                <Calendar width={20} height={20} />
                <Text style={[{marginLeft: 10}, styles.text]}>
                  Friday & Saturday
                </Text>
              </View>
              <FlatList
                style={{marginTop: 16, width: '90%'}}
                nestedScrollEnabled
                data={FlatListDATA}
                renderItem={renderFlatListItems}
                keyExtractor={item => item.id}
              />
              <View style={styles.calendarText}>
                <Calendar width={20} height={20} />
                <Text style={[{marginLeft: 10}, styles.text]}>Sunday</Text>
              </View>
              <FlatList
                style={{marginTop: 16, width: '90%'}}
                nestedScrollEnabled
                data={FlatListDATA}
                renderItem={renderFlatListItems}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
