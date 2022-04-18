import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import MainStyle from '../../utility/MainStyle';
import {FlatListDATA} from './mock';
import Logo from '../../assets/logo.svg';
import Location from '../../assets/location.svg';
import Calendar from '../../assets/calendar.svg';
import Map from '../../assets/map.svg';

export default function EventScreen(props) {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [textShown0, setTextShown0] = useState(false);
  const [numLines, setNumLines] = useState(undefined);
  const [indexShow, seTindexShow] = useState('');

  const toggleTextShown = index => {
    seTindexShow(index);
    setTextShown(!textShown);
  };

  const toggleEvent = index => {
    setTextShown0(!textShown0);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 2);
  }, [textShown]);
  const onTextLayout = useCallback(
    e => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMoreButton(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  const renderFlatListItems = ({item, index}) => (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={require('../../assets/gaga.jpg')}
            resizeMode="cover"
            style={{
              borderRadius: 10,
              width: 60,
              height: 60,
              marginBottom: 10,
            }}
          />

          <View style={{marginLeft: 10}}>
            <Text
              onPress={() => props.navigation.navigate('artist')}
              style={styles.title0}>
              {item.title}
            </Text>
            <View style={{width: '90%'}}>
              <Text style={styles.text} onTextLayout={onTextLayout}>
                BBB your favorite dishe and a lovely your friends and Enjoy your
                favorite dishe and a lovely cafft.
                {!(textShown && indexShow === index) ? (
                  <Text
                    style={styles.textMoreLess}
                    onPress={() => toggleTextShown(index)}>
                    {' Read More'}
                  </Text>
                ) : (
                  <Text onPress={() => toggleTextShown(index)}>
                    {'  '}TTTT your favorite dishe and a lovely your friends and
                    Enjoy your favorite dishe and a lovely avorite
                    <Text style={styles.textMoreLess}>
                      {textShown && indexShow === index && ' Read Less'}
                    </Text>
                  </Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={MainStyle.appBarThreeItemBackground}>
        <View style={MainStyle.appBarWidthThreeIcons}>
          <View style={MainStyle.appBarThreeIconsSpaceBetween}>
            <Logo style={{marginLeft: 15}} width={24} height={24} />
            <View style={MainStyle.appBarThreeIconContent}>
              <Pressable onPress={() => props.navigation.navigate('schedule')}>
                <Calendar width={15} height={15} style={{marginRight: 25}} />
              </Pressable>
              <Pressable onPress={() => props.navigation.navigate('map')}>
                <Map width={15} height={15} />
              </Pressable>
            </View>
          </View>
        </View>
      </Appbar.Header>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ImageBackground
            source={require('../../assets/image7.jpg')}
            resizeMode="contain"
            borderRadius={6}
            style={styles.backgroundImage}>
            <Text style={styles.backgroundImageText}>International Band</Text>
            <Text
              style={{
                paddingLeft: 16,
                fontSize: 32,
                fontFamily: 'TransatStandard',
                lineHeight: 40,
                color: 'white',
              }}>
              Music Concert
            </Text>
          </ImageBackground>
          <View style={styles.timeTable}>
            <View style={styles.timeTableContent}>
              <View style={{flexDirection: 'row'}}>
                <Calendar
                  style={{
                    alignSelf: 'center',
                  }}
                  width={19}
                  height={19}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textTitle}>1 May, 2022</Text>
                  <Text style={styles.textsub}>Saturday, 2:00PM - 9:00PM</Text>
                </View>
              </View>
            </View>
            <View style={styles.timeTableContent2}>
              <View style={{flexDirection: 'row'}}>
                <Location
                  style={{
                    alignSelf: 'center',
                  }}
                  width={19}
                  height={19}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textTitle}>Gala Convention Center</Text>
                  <Text style={styles.textsub}>36 Guild Street London, UK</Text>
                </View>
              </View>
            </View>
            <Text style={styles.title}>About Event</Text>
            <Text style={styles.text} onTextLayout={onTextLayout}>
              Enjoy your favorite dishe and a lovely your friends and Enjoy your
              favorite dishe and a lovely avorite.
              {!textShown0 ? (
                <Text style={styles.textMoreLess} onPress={toggleEvent}>
                  {' Read More'}
                </Text>
              ) : (
                <Text onPress={toggleEvent}>
                  {'  '}Enjoy your favorite dishe and a lovely your friends and
                  Enjoy your favorite dishe and a lovely avorite
                  <Text style={styles.textMoreLess}>
                    {textShown0 ? ' Read Less' : ' Read More'}
                  </Text>
                </Text>
              )}
            </Text>
            <Text style={styles.titleArtist}>Artists</Text>

            <FlatList
              style={{marginBottom: 130}}
              nestedScrollEnabled
              data={FlatListDATA}
              renderItem={renderFlatListItems}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
