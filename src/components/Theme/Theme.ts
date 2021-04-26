import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  colors: {
    primary: '#0065ff',
    secondary: '#36B37E',
    green: '#36B37E',
    grey: '#B3BAC5',
    darkGrey: '#5E6C84',
    light: '#f4f5f7',
    dark: '#172B4D',
    yellow: '#FFAB00',
    white: '#fff',
    subText: 'rgba(16, 10, 57, 0.5)',
    red: '#FF628D',
    lightBlue: '#b9d5ff',
    lightGreen: '#d5f3e8',
    orange: '#ff5630',
  },
  constants: {
    masterWidth: width,
    screenWidth: width - 40,
    screenPadding: 40,
    onboardingPadding: 80,
  },
};
