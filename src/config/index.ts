import {
  FLUTTERWAVE_SECRET_KEY,
  FLUTTERWAVE_TEST_SECRET_KEY,
  FLUTTERWAVE_TEST_PUBLIC_KEY,
  FLUTTERWAVE_PUBLIC_KEY,
} from '@env';

export default {
  secretKey: FLUTTERWAVE_SECRET_KEY,
  testSecretKey: FLUTTERWAVE_TEST_SECRET_KEY,
  testPublicKey: FLUTTERWAVE_TEST_PUBLIC_KEY,
  livePublicKey: FLUTTERWAVE_PUBLIC_KEY,
  paymentLinkEndpoint: 'https://api.flutterwave.com/v3/payments',
};
