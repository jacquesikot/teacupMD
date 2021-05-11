import * as Linking from 'expo-linking';

const tabData = [
  {
    id: 1,
    title: 'Quick Consultation',
    subText: 'Consult a general practitioner',
    img: require('../../../assets/images/consult1.png'),
    color: 'blue',
    onPress: () => Linking.openURL('https://wa.link/ichzoe'),
  },
  {
    id: 2,
    title: 'Customer Service',
    subText: 'Need help with the app',
    img: require('../../../assets/images/consult2.png'),
    color: 'green',
    onPress: () => Linking.openURL('tel:+260975356162'),
  },
];

export default tabData;
