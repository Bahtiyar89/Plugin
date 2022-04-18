import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {fakeLogout} from '../../store/mockUser/action';
import User from '../../assets/user.svg';
import ChevronRight from '../../assets/chevron-right.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import Key from '../../assets/key.svg';
import SignOut from '../../assets/signOut.svg';
import styles from './styles';
import WarningModal from '../../components/WarningModal';
import MainStyle from '../../utility/MainStyle';
import {colorList} from '../../utility/GradientColors';

export default function ProfileScreen(props) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const onLogoutPress = () => {
    dispatch(fakeLogout());
  };

  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  const onLogOutPress = () => {
    setShowModal(true);
  };

  const onCancel = () => {
    setShowModal(false);
  };
  const onComplete = () => {
    setShowModal(false);
    onLogoutPress();
  };

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <ChevronLeft style={{margin: 16}} width={14} height={14} />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Profile</Text>
      </Appbar.Header>

      <ScrollView
        style={styles.screen}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.text}>Lisa Smish</Text>
        <Text style={styles.message}>Personal Account</Text>
        <TouchableOpacity
          style={styles.opacityButton}
          onPress={() => props.navigation.navigate('ProfileEdit')}>
          <View style={styles.buttonFlex}>
            <View style={styles.opacityButtonChild}>
              <User style={styles.iconInButtonLef} width={15} height={15} />
              <Text style={styles.text14}>Edit Personal Info</Text>
            </View>
            <ChevronRight style={{margin: 16}} width={10} height={10} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.opacityButton2}
          onPress={() => props.navigation.navigate('PasswordChange')}>
          <View style={styles.opacityButtonChild2}>
            <Key style={styles.iconInButtonLef} width={15} height={15} />
            <Text style={styles.text14}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacityButton2} onPress={onLogOutPress}>
          <View style={styles.opacityButtonChild2}>
            <SignOut style={styles.iconInButtonLef} width={15} height={15} />
            <Text style={styles.text14}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {showModal && <WarningModal cancel={onCancel} complete={onComplete} />}
    </Fragment>
  );
}
