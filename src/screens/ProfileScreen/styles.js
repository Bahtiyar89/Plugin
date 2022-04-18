import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: '#00131A',
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
  },
  appBarHeaderText: {
    flex: 0.9,
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  screen: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 28,
    fontFamily: 'TransatBold',
    lineHeight: 35,
    color: Colors.white,
  },
  message: {
    fontSize: 12,
    fontFamily: 'TransatBold',
    lineHeight: 16,
    color: Colors.darker,
  },
  text14: {
    marginLeft: 21,
    fontSize: 14,
    fontFamily: 'TransatBold',
    lineHeight: 16,
    color: Colors.white,
  },
  opacityButton: {
    marginTop: 24,
    backgroundColor: 'black',
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
  },
  opacityButton2: {
    marginTop: 8,
    backgroundColor: 'black',
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
  },
  opacityButtonChild: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  opacityButtonChild2: {
    marginLeft: 8,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconInButtonLef: {
    marginLeft: 21,
  },
  buttonFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
