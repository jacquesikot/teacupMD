import axios from 'axios';

import config from '../config';

interface PaymentProps {
  amount: string;
  redirect_url: string;
  consumer_id: string;
  email: string;
  phone_number: string;
  name: string;
}

const getPaymentLink = async ({
  amount,
  redirect_url,
  consumer_id,
  email,
  name,
  phone_number,
}: PaymentProps) => {
  const options = {
    headers: {
      Authorization: `Bearer ${config.secretKey}`,
    },
  };

  const data = {
    tx_ref: `pRef-${Math.random()}`,
    amount,
    currency: 'ZMW',
    redirect_url,
    payment_options: 'card',
    meta: {
      consumer_id,
      consumer_mac: 'random string',
    },
    customer: {
      email,
      phonenumber: phone_number,
      name,
    },
  };

  const result = await axios.post(config.paymentLinkEndpoint, data, options);

  return result.data.data.link;
};

export default {
  getPaymentLink,
};
