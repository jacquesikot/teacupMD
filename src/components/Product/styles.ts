import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: 'center',
    padding: 15,
    marginRight: 23,
    marginBottom: 15,
  },
  label: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.dark,
    fontSize: wp('3.8%'),
    marginTop: 27,
    width: '100%',
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('3.8%'),
  },
  cart: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
