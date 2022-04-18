import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  opacityButton: {
    marginTop: 24,
    backgroundColor: 'black',
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
  },

  input: {
    fontFamily: 'TransatStandard',
    flex: 1,
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
  togglePassText: {
    fontFamily: 'TransatStandard',
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  legend: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.white,
  },

  inputContainer: {
    marginTop: 16,
    height: 80,
    justifyContent: 'space-between',
  },
  inputContainer2: {
    marginTop: 16,
    height: 80,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
