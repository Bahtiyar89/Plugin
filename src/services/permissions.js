import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
    console.log('Authorization status:', authStatus);
  }
};

const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('Your Firebase Token is:', fcmToken);
  } else {
    console.log('Failed', 'No token received');
  }
  const apnsToken = await messaging().getAPNSToken();
  if (apnsToken) {
    console.log('Your APNS Firebase Token is:', apnsToken);
  } else {
    console.log('Failed', 'No APNS token received');
  }
};
