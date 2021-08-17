import * as Linking from 'expo-linking';

const WHATSAPP_MESSAGE = 'Hello, I would like to make a quick consultation.';

const WHATSAPP_MESSAGE_2 =
  'Hello, I would like to make a complaint about the app.';

const tabData = [
  {
    id: 1,
    title: 'Quick Consultation',
    subText: 'Consult a general practitioner',
    img: require('../../../assets/images/consult1.png'),
    color: 'blue',
    onPress: () =>
      Linking.openURL(`https://wa.me/+260763596241?text=${WHATSAPP_MESSAGE}`),
  },
  {
    id: 2,
    title: 'Customer Service',
    subText: 'If you need help with anything on the app',
    img: require('../../../assets/images/consult1.png'),
    color: 'green',
    onPress: () =>
      Linking.openURL(`https://wa.me/+260975356162?text=${WHATSAPP_MESSAGE_2}`),
  },
];

export default tabData;
