import React, {Fragment, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  Linking,
  Pressable,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {RadialGradient} from 'react-native-gradients';

import MainStyle from '../../utility/MainStyle';
import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import {carouselItems, FlatListDATA} from './mock';
import Logo from '../../assets/logo.svg';
import Bell from '../../assets/bell.svg';
import User from '../../assets/user.svg';
import Export from '../../assets/export.svg';

export default function HomeScreen(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, seTactiveTab] = useState('Blog');

  const ref = useRef(null);

  const navigate = item => {
    if (item.link.length > 3) {
      Linking.openURL(item.link);
    } else {
      props.navigation.navigate(item.navigate);
    }
  };

  const renderItem = useCallback(
    ({item, index}) => (
      <Pressable onPress={() => navigate(item)}>
        <ImageBackground
          source={item.uri}
          resizeMode="cover"
          borderRadius={12}
          style={styles.carouselItemBackground}>
          <Text style={styles.carouselItemTitle}>{item.title}</Text>
          <Text style={styles.carouselItemText}>{item.text}</Text>
          <Text
            // onPress={() => Linking.openURL(item.link)}
            style={styles.carouselItemSubText}>
            {item.subText}
          </Text>
        </ImageBackground>
      </Pressable>
    ),
    [],
  );

  const renderFlatListItems = ({item}) => (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.flatItem}>
        <View style={styles.flatItemContent}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.uri}
              resizeMode="cover"
              style={styles.flatItemImage}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.textBold}>{item.title}</Text>
              <Text style={[styles.text, {marginTop: 0}]}>{item.text}</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Export width={24} height={24} />
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );
  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={MainStyle.appBarThreeItemBackground}>
        <View style={MainStyle.appBarWidthThreeIcons}>
          <View style={MainStyle.appBarThreeIconsSpaceBetween}>
            <Logo style={{marginLeft: 15}} width={24} height={24} />
            <Pressable onPress={() => props.navigation.navigate('Profile')}>
              <User style={{marginRight: 15}} width={15} height={15} />
            </Pressable>
          </View>
        </View>
      </Appbar.Header>

      <ScrollView
        style={styles.screen}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={[styles.title]}>Hello, Lisa 👋🏻</Text>
        <Text style={styles.text}>Tristique faucibus ut feugiat habitant.</Text>
        <Text style={[styles.textBold, {marginTop: 20, marginBottom: 10}]}>
          Special Offers
        </Text>

        <View style={styles.carouselContainer}>
          <Carousel
            layout="default"
            ref={ref}
            data={carouselItems}
            sliderHeight={200}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={index => setActiveIndex(index)}
          />
        </View>
        <View style={[{marginBottom: 10}, styles.tabContainer]}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                width: 100,
                backgroundColor:
                  activeTab === 'Blog' ? '#00AEEF' : 'transparent',
              },
            ]}
            onPress={() => seTactiveTab('Blog')}>
            <Text style={styles.tabButtonText}>Blog</Text>
          </TouchableOpacity>

          <Text style={styles.tabButtonText}>Shop</Text>

          <Text style={[{width: 100}, styles.tabButtonText]}>{'   '}</Text>
        </View>
        {activeTab === 'Blog' && (
          <View style={{height: 180}}>
            <FlatList
              nestedScrollEnabled
              data={FlatListDATA}
              renderItem={renderFlatListItems}
              keyExtractor={item => item.id}
            />
          </View>
        )}
        {activeTab === 'Schedule' && (
          <View style={{height: 150}}>
            <Text style={{marginTop: 30, textAlign: 'center', color: '#fff'}}>
              Shedule is being done
            </Text>
          </View>
        )}
        {activeTab === 'Tickets' && (
          <View style={{height: 150}}>
            <Text style={{marginTop: 30, textAlign: 'center', color: '#fff'}}>
              Tickets is being done
            </Text>
          </View>
        )}
      </ScrollView>
    </Fragment>
  );
}
