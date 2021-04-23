import { StyleSheet } from 'react-native';

import { theme } from '../../components';

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    paddingBottom: 5,
  },
  tabBarItem: {
    backgroundColor: theme.colors.white,
  },
});

export default styles;
