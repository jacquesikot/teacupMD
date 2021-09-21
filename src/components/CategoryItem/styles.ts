import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';

export const WIDTH = wp(26);
export const HEIGHT = hp(18);

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(4),
    alignItems: 'center',
    padding: wp(4),
    marginRight: wp(4),
    marginBottom: wp(4),
    borderWidth: 1,
  },
  label: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp(3.8),
    marginTop: wp(4),
    height: hp(4),
  },
  iconContainer: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: theme.colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(3.5),
  },
});

export default styles;
