import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '../../components';

const IMG_FORM_FACTOR = 2.68;
export const WIDTH = wp('23%');
export const HEIGHT = hp('21%');
export const PRODUCT_WIDTH = wp('41%');
export const PRODUCT_HEIGHT = hp('25%');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    alignItems: 'center',
  },
  image: {
    width: theme.constants.screenWidth,
    height: theme.constants.screenWidth / IMG_FORM_FACTOR,
    marginBottom: 30,
  },
  sliderContainer: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginTop: 15,
    marginBottom: 15,
    width: theme.constants.screenWidth,
  },
  productGrid: {
    width: theme.constants.screenWidth,
  },
});

export default styles;
