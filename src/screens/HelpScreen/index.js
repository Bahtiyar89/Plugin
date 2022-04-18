import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Appbar, IconButton} from 'react-native-paper';

import {colorList} from '../../utility/GradientColors';
import styles from './styles';
import Mail from '../../assets/mail.svg';
import MainStyle from '../../utility/MainStyle';
import Logo from '../../assets/logo.svg';
import PinLocation from '../../assets/pinLocation.svg';
import Calendar from '../../assets/calendar.svg';
import Plus from '../../assets/plus.svg';
import Police from '../../assets/police.svg';
import Phone from '../../assets/phone.svg';
import Envelope from '../../assets/envelope.svg';
import Messenger from '../../assets/messenger.svg';
import Face from '../../assets/f.svg';
import Instagram from '../../assets/instagram.svg';

export default function HelpScreen(props) {
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
      <Appbar.Header style={MainStyle.appBarThreeItemBackground}>
        <Logo style={{marginLeft: 15}} width={24} height={24} />
      </Appbar.Header>
      <View style={[styles.container]}>
        <Text style={styles.text}>Information</Text>
        <TouchableOpacity
          style={{
            marginTop: 16,
            width: '100%',
            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            borderRadius: 12,
            borderWidth: 1,
          }}
          onPress={() => props.navigation.navigate('buschedule')}>
          <Calendar style={{marginLeft: 20}} width={14} height={14} />
          <Text style={{marginLeft: 20, color: 'white'}}>Bus Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 8,
            width: '100%',
            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            borderRadius: 12,
            borderWidth: 1,
          }}
          onPress={() => props.navigation.navigate('infochedule')}>
          <PinLocation style={{marginLeft: 20}} width={14} height={14} />
          <Text style={{marginLeft: 20, color: 'white'}}>Info Stand</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.touchableButton49}
            onPress={() => console.log('logg')}>
            <Plus
              style={{marginLeft: 20}}
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginLeft: 18, color: 'white'}}>Red Cross</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableButton49}
            onPress={() => console.log('logg')}>
            <Police
              style={{marginLeft: 20}}
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginLeft: 20, color: 'white'}}>Police</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>Businessname</Text>
        <Text style={styles.text}>Lorem Ipsum Dolor Sit.</Text>
        <View
          style={{
            marginTop: 16,
            borderBottomColor: '#575767',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.text4}>Address</Text>
        <Text style={styles.text3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          pellentesque amet.
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 52,
              height: 52,
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('logg')}>
            <Phone
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginTop: 9, fontSize: 9, color: '#929292'}}>
              Phone
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 52,
              height: 52,
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('logg')}>
            <Envelope
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginTop: 9, fontSize: 9, color: '#929292'}}>
              Envelope
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 52,
              height: 52,
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('logg')}>
            <Messenger
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginTop: 9, fontSize: 9, color: '#929292'}}>
              Messanger
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 52,
              height: 52,
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('logg')}>
            <Face
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginTop: 9, fontSize: 9, color: '#929292'}}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 52,
              height: 52,
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('logg')}>
            <Instagram
              onPress={() => props.navigation.navigate('schedule')}
              width={14}
              height={14}
            />
            <Text style={{marginTop: 9, fontSize: 9, color: '#929292'}}>
              Instagram
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}
