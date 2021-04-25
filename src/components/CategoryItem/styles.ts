import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: 'center',
    padding: 15,
    marginRight: 15,
    marginBottom: 15,
    borderWidth: 1,
  },
  label: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('3.8%'),
    marginTop: 15,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default styles;
