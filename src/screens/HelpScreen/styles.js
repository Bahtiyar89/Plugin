import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
  },

  text2: {
    marginTop: 30,
    fontSize: 12,
    fontFamily: 'TransatBold',
    textTransform: 'uppercase',
    color: '#929292',
    marginBottom: 8,
  },

  text3: {
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
  },

  text4: {
    marginTop: 15,
    fontSize: 12,
    fontFamily: 'TransatBold',
    textTransform: 'uppercase',
    color: '#929292',
    marginBottom: 8,
  },

  inputContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  touchableButton49: {
    marginTop: 16,
    width: '49%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
  },
});

export default styles;
