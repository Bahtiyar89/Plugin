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
    paddingTop: 25,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
  },

  text2: {
    marginTop: 30,
    fontSize: 12,
    fontFamily: 'TransatBold',
    textTransform: 'uppercase',
    color: '#929292',
    marginBottom: 8,
  },

  text3: {
    fontSize: 15,
    fontFamily: 'TransatBold',
    color: Colors.white,
    marginBottom: 8,
  },

  text4: {
    marginTop: 15,
    fontSize: 12,
    fontFamily: 'TransatBold',
    textTransform: 'uppercase',
    color: '#929292',
    marginBottom: 8,
  },

  inputContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  touchableButton49: {
    marginTop: 16,
    width: '49%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
  },
  tabContainer: {
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
    fontSize: 14,
    color: Colors.white,
  },
  locationIcons: {
    marginTop: 16,
    borderColor: '#00ADEF',
    borderWidth: 1,
    borderRadius: 30,
    width: '100%',
    padding: 10,
  },
  flatListIconContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  spaceBetweenIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceBetweenTexts: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    marginTop: 12,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
  },

  calendarText: {
    marginTop: 10,
    width: '90%',
    flexDirection: 'row',
  },
  itemBackground: {
    fontFamily: 'TransatStandard',
    marginTop: 16,
    height: 234,
    justifyContent: 'center',
  },
  itemTitle: {
    paddingTop: 140,
    paddingLeft: 16,
    fontSize: 28,
    fontFamily: 'TransatStandard',
    lineHeight: 28,
    color: 'white',
  },
  itemText: {
    paddingLeft: 16,
    fontSize: 28,
    fontFamily: 'TransatStandard',
    lineHeight: 28,
    color: 'white',
  },
  itemSubText: {
    paddingLeft: 16,
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: 'white',
  },
  carouselItemBackground2: {
    fontFamily: 'TransatStandard',
    marginTop: 16,
    height: 234,
    justifyContent: 'center',
  },
});

export default styles;
