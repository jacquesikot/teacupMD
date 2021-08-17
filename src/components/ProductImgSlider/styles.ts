import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: theme.constants.screenWidth,
  },
  pagination: {
    position: 'absolute',
    top: hp(30),
    width: '100%',
    height: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: wp(0.7),
    width: wp('1.4%'),
    height: wp('1.4%'),
    borderRadius: wp('0.7%'),
    backgroundColor: theme.colors.primary,
  },
  image: {
    width: theme.constants.screenWidth,
    height: height * 0.4,
    alignSelf: 'flex-start',
  },
});

export default styles;
