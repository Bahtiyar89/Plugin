import React, {Fragment, useState} from 'react';
import {Pressable, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import Mail from '../../assets/mail.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import MainStyle from '../../utility/MainStyle';

export default function ProfileEditScreen(props) {
  const [name, seTname] = useState('Liza Smith');
  const [email, seTemail] = useState('john.deo@adress.com');

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
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={val => seTname(val)}
          placeholderTextColor={'#999CA0'}
          style={styles.input}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.legend}>Email Address</Text>
          <View style={styles.searchSection}>
            <Mail width={24} height={24} />
            <TextInput
              value={email}
              onChangeText={val => seTemail(val)}
              placeholderTextColor={'#999CA0'}
              placeholder="john.doe@address.com"
              style={[styles.input, styles.emailInput]}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
}
