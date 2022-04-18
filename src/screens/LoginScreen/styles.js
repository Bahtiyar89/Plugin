import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
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
    marginBottom: 30,
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    alignSelf: 'center',
    color: Colors.white,
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
  inputContainer: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  haveAnAccountText: {
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: Colors.white,
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

  inputError: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.red,
  },

  inputEmail: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.black,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 5,
    backgroundColor: Colors.black,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
  togglePassText: {
    fontFamily: 'TransatStandard',
    color: Colors.white,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  completeButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },
  completeInactive: {
    backgroundColor: Colors.disabled,
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
    width: '100%',
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
