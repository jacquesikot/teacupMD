import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4.5%'),
    letterSpacing: 0.6,
  },
});

export default styles;
