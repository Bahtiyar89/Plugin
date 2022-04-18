import React from 'react';
import {View, Image, Text} from 'react-native';
import ChevronDown from '../../assets/chevron-down.svg';
import ChevronUp from '../../assets/chevron-up.svg';

export default function ShevroletUpDown({
  source,
  downButton,
  onPassReveal,
  width,
  height,
  text,
}) {
  if (downButton) {
    return (
      <ChevronUp
        style={{
          marginTop: 30,
          marginBottom: 20,
          justifyContent: 'center',
        }}
        onPress={onPassReveal}
        width={15}
        height={15}
      />
    );
  } else {
    return (
      <ChevronDown
        style={{
          marginTop: 30,
          marginBottom: 20,
          justifyContent: 'center',
        }}
        onPress={onPassReveal}
        width={15}
        height={15}
      />
    );
  }
}
