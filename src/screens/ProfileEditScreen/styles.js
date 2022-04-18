import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 16,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
  },

  input: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  legend: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.white,
  },

  emailInput: {
    paddingLeft: 10,
  },

  searchSection: {
    flex1: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
  },

  inputContainer: {
    marginTop: 10,
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default styles;
