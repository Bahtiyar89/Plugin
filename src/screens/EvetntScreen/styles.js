import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'TransatBold',
    lineHeight: 18,
    color: Colors.white,
  },
  titleArtist: {
    marginTop: 32,
    marginBottom: 19,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'TransatBold',
    lineHeight: 18,
    color: Colors.white,
  },
  title0: {
    fontSize: 18,
    fontFamily: 'TransatBold',
    lineHeight: 18,
    color: Colors.white,
  },
  text: {
    fontFamily: 'TransatStandard',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.white,
  },
  textMoreLess: {
    color: Colors.blue,
  },
  textTitle: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 34,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textsub: {
    fontSize: 16,
    lineHeight: 34,
    fontFamily: 'TransatStandard',
    color: Colors.darker,
  },
  backgroundImage: {
    fontFamily: 'TransatStandard',
    justifyContent: 'center',
    height: 244,
  },
  backgroundImageText: {
    paddingTop: 128,
    paddingLeft: 16,
    fontSize: 32,
    fontFamily: 'TransatStandard',
    lineHeight: 40,
    color: 'white',
  },
  timeTable: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  timeTableContent: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeTableContent2: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
