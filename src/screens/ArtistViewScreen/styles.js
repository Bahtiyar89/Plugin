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
  container: {
    paddingTop: 30,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 14,
    fontFamily: 'TransatBold',
    color: Colors.white,
  },
  textP: {
    fontSize: 14,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginTop: 20,
    marginBottom: 120,
    lineHeight: 21,
  },
});

export default styles;
