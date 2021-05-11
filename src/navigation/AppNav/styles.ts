import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  tabBar: {
    height: hp(8),
    paddingBottom: hp(2),
    paddingTop: hp(1),
  },
  tabBarItem: {
    backgroundColor: theme.colors.white,
  },
});

export default styles;
