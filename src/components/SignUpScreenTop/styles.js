import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  haveAnAccountText: {
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: Colors.white,
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    fontFamily: 'TransatStandard',
    lineHeight: 16,
  },
  titleContainer: {
    marginTop: 25,
  },
  title: {
    fontSize: 28,
    fontFamily: 'TransatBold',
    lineHeight: 35,
    alignSelf: 'center',
    color: Colors.white,
  },
  blueColor: {
    color: Colors.blue,
  },
  message: {
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    alignSelf: 'center',
    color: Colors.white,
  },
});

export default styles;
