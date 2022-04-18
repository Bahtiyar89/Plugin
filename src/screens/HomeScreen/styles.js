import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00131A',
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
  },
  screen: {
    width: '100%',
    marginTop: 20,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'TransatBold',
    lineHeight: 35,
    color: Colors.blue,
  },
  text: {
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: Colors.white,
  },
  textBold: {
    fontSize: 14,
    fontFamily: 'TransatBold',
    lineHeight: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 32,
  },
  tabButton: {
    borderRadius: 8,
    justifyContent: 'center',
  },
  tabButtonText: {
    alignSelf: 'center',
    fontFamily: 'TransatStandard',
    fontSize: 16,
    color: Colors.white,
  },
  flatItem: {
    marginVertical: 1,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  carouselItemBackground: {
    fontFamily: 'TransatStandard',
    width: 300,
    height: 234,
    justifyContent: 'center',
  },
  carouselItemTitle: {
    paddingTop: 140,
    paddingLeft: 16,
    fontSize: 28,
    fontFamily: 'TransatStandard',
    lineHeight: 28,
    color: 'white',
  },
  carouselItemText: {
    paddingLeft: 16,
    fontSize: 28,
    fontFamily: 'TransatStandard',
    lineHeight: 28,
    color: 'white',
  },
  carouselItemSubText: {
    paddingLeft: 16,
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: 'white',
  },
  flatItemContent: {flexDirection: 'row', justifyContent: 'space-between'},
  flatItemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});

export default styles;
