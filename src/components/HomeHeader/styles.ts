import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.constants.screenPadding,
    width: theme.constants.screenWidth,
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  textContainer: {},
  name: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginBottom: 8,
  },
  welcome: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
  },
  alert1: {
    width: 20,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 35,
    left: 10,
  },
  alert2: {
    width: 20,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 35,
    left: 7.5,
  },
});

export default styles;
