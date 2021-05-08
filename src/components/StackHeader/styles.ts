import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.constants.screenPadding,
    marginBottom: 30,
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5.5%'),
    color: theme.colors.dark,
  },
  alert: {
    width: 20,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    borderWidth: 1,
    borderColor: theme.colors.white,
    bottom: 10,
    left: 10,
  },
  cartText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.dark,
  },
});

export default styles;
