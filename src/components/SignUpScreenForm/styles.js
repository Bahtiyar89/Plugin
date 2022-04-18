import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  inputContainer: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  legend: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.white,
  },
  input: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
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
  searchIcon: {
    paddingLeft: 0,
  },
  emailInput: {
    paddingLeft: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mailIcon: {
    position: 'absolute',
    left: 8,
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
  completeButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.blue,
  },
  completeInactive: {
    backgroundColor: Colors.blueTrans,
  },
  completeButtonText: {
    color: Colors.white,
    fontFamily: 'TransatBold',
  },
  separate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 28,
  },
  separateLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 0.7,
    borderColor: Colors.white,
  },
  separateText: {
    flex: 0.2,
    textAlign: 'center',
    color: Colors.darkGrey,
  },
  socialMediaButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '48%',
  },
  socialMediaButtonText: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    color: Colors.black,
  },
  google: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  googleIcon: {
    marginRight: 10,
  },

  forgotPasswordButton: {
    marginLeft: 12,
    marginBottom: 16,
  },
  forgotPasswordButtonText: {
    fontFamily: 'TransatStandard',
    fontSize: 12,
    textDecorationLine: 'underline',
    color: Colors.white,
  },
});

export default styles;
