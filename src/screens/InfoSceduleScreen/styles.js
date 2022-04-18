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
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  textHeader: {
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: '#929292',
    textTransform: 'uppercase',
  },

  text: {
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: Colors.white,
  },

  horizontalLine: {
    marginTop: 15,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
  },
});

export default styles;
