import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomModal from '../CustomModal';

export default function CheckEmailModal({cancel, complete}) {
  return (
    <CustomModal>
      <Text style={styles.title}>Check Your Email</Text>
      <Text style={styles.message}>
        {"We've sent password to your email/\nPlease, check it to continue"}
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={cancel} style={styles.button}>
          <Text style={styles.cancelButtonText}>Dismiss</Text>
        </Pressable>
        <Pressable
          onPress={complete}
          style={[styles.button, styles.continueButton]}>
          <Text style={styles.continueButtonText}>Open Mail</Text>
        </Pressable>
      </View>
    </CustomModal>
  );
}
