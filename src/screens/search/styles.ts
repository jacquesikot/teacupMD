import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

export const PRODUCT_WIDTH = wp('43%');
export const PRODUCT_HEIGHT = isAndroid ? hp(27) : hp(25);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    alignItems: 'center',
  },
  textInput: {
    marginTop: theme.constants.screenPadding,
    width: theme.constants.screenWidth,
    height: 50,
    borderRadius: 15,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 40,
  },
  placeholder: {
    fontSize: wp('4%'),
    fontFamily: 'SofiaPro-Regular',
    paddingLeft: 20,
    color: theme.colors.darkGrey,
    width: '78%',
    height: '100%',
  },
  historyContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyText: {
    fontSize: wp('6%'),
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
  },
  trashButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trashText: {
    fontSize: isAndroid ? wp(3.5) : wp(4),
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.darkGrey,
  },
  searchHistory: {
    marginTop: 20,
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    flexWrap: 'wrap',
  },
  historyItem: {
    height: 40,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    padding: 10,
    marginRight: 15,
    marginBottom: 15,
  },
  historyItemText: {
    fontSize: wp(4),
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.darkGrey,
  },
  noResultText: {
    fontSize: wp(4),
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.darkGrey,
    marginTop: hp(0.5),
  },
  noResultContainer: {
    width: theme.constants.screenWidth,
    alignItems: 'center',
    top: hp(45),
    position: 'absolute',
  },
});

export default styles;
