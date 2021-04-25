import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  textInput: {
    marginTop: theme.constants.screenPadding,
    width: theme.constants.screenWidth,
    height: 50,
    borderRadius: 15,
    backgroundColor: theme.colors.light,
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
    width: wp('25%'),
    justifyContent: 'space-between',
  },
  trashText: {
    fontSize: wp('4%'),
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.darkGrey,
    marginTop: hp('0.5%'),
  },
  searchHistory: {
    marginTop: 20,
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    flexWrap: 'wrap',
  },
  historyItem: {
    height: 40,
    backgroundColor: theme.colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    padding: 10,
    marginRight: 15,
    marginBottom: 15,
  },
  historyItemText: {
    fontSize: wp('4%'),
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.darkGrey,
  },
});

export default styles;
