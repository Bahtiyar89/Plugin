import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import MainStyle from '../../utility/MainStyle';
import styles from './styles';
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
  console.log('props: ', props.route.params);
  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <ChevronLeft style={{margin: 16}} width={14} height={14} />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Lady Gaga</Text>
      </Appbar.Header>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.container]}>
            <Image
              style={{
                height: 278,
                width: '100%',
                alignSelf: 'center',
              }}
              resizeMode="stretch"
              source={require('../../assets/artist.png')}
            />
            <View
              style={{
                marginTop: 20,
                fontFamily: 'TransatStandard',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}>12/12/2021</Text>
              <Text style={styles.text}>By Caroline Casey | 4min read</Text>
            </View>

            <Text style={styles.textP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              praesent amet ac ut feugiat eu sed. Proin tristique egestas
              ultricies dictum consequat. Aenean sed nulla mauris tellus. Ac
              tristique nunc aenean lacus, commodo. Sit imperdiet convallis
              adipiscing tortor, dolor nulla quis. Quisque cras porttitor
              gravida sapien leo. A venenatis, donec tristique quisque nisi In
              aliquam pellentesque hac proin lectus. Habitasse amet senectus
              suscipit donec nisi justo, nibh ullamcorper nulla. Senectus tellus
              curabitur enim amet ornare ac. Amet urna, massa dignissim a sapien
              sagittis, tincidunt. Quam dis eros vel non. Tempus, fames faucibus
              eleifend magna mattis. Donec feugiat velit consectetur vel.
              Sodales ac posuere tincidunt etiam facilisi integer sodales.
              Aliquet enim mus mi, aliquam massa tristique pharetra etiam.
              Suspendisse egestas sem tincidunt non euismod. Luctus vitae,
              pharetra eget velit tempus velit felis. Eu, tellus nunc mollis
              dictumst eu porttitor. Ultrices fusce fermentum non eleifend in
              nisl. Facilisi pellentesque egestas massa odio. Integer sit.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
