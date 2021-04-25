import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  departmentContainer: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  department: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5.5%'),
    color: theme.colors.dark,
  },
  moreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
  },
  departmentSlider: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
  },
  productSlider: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
  },
});

export default styles;
