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

  borderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 16,
  },

  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 3,
  },
});

export default styles;
