import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import MainStyle from '../../utility/MainStyle';
import ChevronLeft from '../../assets/chevron-left.svg';
import styles from './styles';

export default function PasswordChangeScreen(props) {
  const [pass, seTpass] = useState('');
  const [passConf, seTpassConf] = useState('');
  const [passwordInputSecure, seTpasswordInputSecure] = useState(true);
  const [passwordInpSecure2, seTpasswordInpSecure2] = useState(true);

  const BackgroundGradient = ({style, children}) => (
    <View style={[MainStyle.gradientHeader, style]}>
      <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList} />
    </View>
  );

  return (
    <Fragment>
      <BackgroundGradient />
      <Appbar.Header style={MainStyle.appBarThreeItem}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <ChevronLeft style={{margin: 16}} width={14} height={14} />
        </Pressable>
        <Text style={MainStyle.appBarThreeItemText}>Change Password</Text>
        <TouchableOpacity
          style={MainStyle.appBarThreeItemButton}
          onPress={() => console.log('save button')}>
          <Text style={MainStyle.appBarThreeItemButtonText}>Save</Text>
        </TouchableOpacity>
      </Appbar.Header>
      <View style={[styles.container]}>
        <View style={styles.inputContainer}>
          <Text style={styles.legend}>New Password</Text>

          <View style={styles.inputWrapper}>
            <TextInput
              value={pass}
              onChangeText={val => seTpass(val)}
              placeholderTextColor={'#999CA0'}
              placeholder="••••••••••"
              secureTextEntry={passwordInputSecure}
              style={styles.input}
            />
            <Pressable
              onPress={() => seTpasswordInputSecure(prev => !prev)}
              style={styles.togglePassWrapper}>
              <Text style={styles.togglePassText}>
                {passwordInputSecure ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputContainer2}>
          <Text style={styles.legend}>New Password Confirmation</Text>

          <View style={styles.inputWrapper}>
            <TextInput
              value={passConf}
              onChangeText={val => seTpassConf(val)}
              placeholderTextColor={'#999CA0'}
              placeholder="••••••••••"
              secureTextEntry={passwordInpSecure2}
              style={styles.input}
            />
            <Pressable
              onPress={() => seTpasswordInpSecure2(prev => !prev)}
              style={styles.togglePassWrapper}>
              <Text style={styles.togglePassText}>
                {passwordInpSecure2 ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Fragment>
  );
}
