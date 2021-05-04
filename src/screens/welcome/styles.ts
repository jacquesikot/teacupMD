import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  welcomeContainer: {
    flexDirection: 'column',
    width: theme.constants.screenWidth,
    marginTop: 70,
  },
  welcomeText1: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('10%'),
    color: theme.colors.dark,
  },
  welcomeText2: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('8%'),
    color: theme.colors.primary,
  },
  topSection: {
    width: theme.constants.screenWidth,
    height: hp('70%'),
  },
  bottomSection: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: theme.colors.dark,
    paddingTop: 40,
    alignItems: 'center',
  },
  image: {
    width: 750,
    height: 750,
    position: 'absolute',
    top: '-4%',
  },
});

export default styles;
