import {View, Text, Pressable} from 'react-native';
import React from 'react';

import CustomModal from '../CustomModal';
import styles from './styles';

export default function WarningModal({cancel, complete}) {
  return (
    <CustomModal>
      <Text style={styles.title}>Check Your Email</Text>
      <Text style={styles.message}>
        Are you sure you want to Sign Out of the App ? You can resign up any
        time
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={cancel} style={styles.button}>
          <Text style={styles.cancelButtonText}>Stay in App</Text>
        </Pressable>
        <Pressable
          onPress={complete}
          style={[styles.button, styles.continueButton]}>
          <Text style={styles.continueButtonText}>Sign Out</Text>
        </Pressable>
      </View>
    </CustomModal>
  );
}
