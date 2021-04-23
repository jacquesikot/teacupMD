import { StyleSheet } from 'react-native';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    borderRadius: 100,
    padding: 16,
    shadowRadius: 10,
    shadowOpacity: 0.24,
    shadowColor: theme.colors.primary,
    elevation: 10,
  },
});

export default styles;
