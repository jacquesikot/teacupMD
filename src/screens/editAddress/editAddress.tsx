import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';

import styles, { FORM_WIDTH } from './styles';
import StackHeader from '../../components/StackHeader/StackHeader';
import TextInput from '../../components/TextInput/TextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import { theme } from '../../components';
import Button from '../../components/Button/Button';
import useEditAddress from './useEditAddress';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import addressApi from '../../firebase/address';
import { useAppContext } from '../../context/context';

const EditAddress = ({
  navigation,
  route,
}: StackScreenProps<ProfileNavParamList, 'EditAddress'>) => {
  const { addressSchema } = useEditAddress();
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAppContext();

  const [userAddress, setUserAddress] = useState<any>([]);

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = async () => {
    const address = await addressApi.getUserAddress({
      pageParam: user.id,
    });
    setUserAddress(address);
  };

  interface AddressProps {
    address: string;
    address2?: string;
    city: string;
    name: string;
    phone_number: string;
    state: string;
    user_id?: string;
    zipcode: string;
  }

  const handleSubmit = async (values: AddressProps, handleReset: any) => {
    try {
      setLoading(true);

      await addressApi.addUserAddress({
        address: values.address.trim() + values.address2?.trim(),
        city: values.city,
        name: values.name.trim(),
        phone_number: values.phone_number.trim(),
        state: values.state.trim(),
        zipcode: values.zipcode.trim(),
        user_id: user.id.trim(),
      });
      handleReset({
        values: {
          address: '',
          city: '',
          name: '',
          phone_number: '',
          state: '',
          zipcode: '',
        },
      });
      navigation.navigate('Profile');
      setLoading(false);
      Toast.show({
        type: 'success',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Address',
        text2: 'Address added succesfully',
      });
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 7000,
        autoHide: true,
        text1: 'Address Error',
        text2: 'Error adding address',
      });
    }
  };

  const routeParams = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'height' : 'height'}
      >
        <StackHeader
          label="Delivery Address"
          back={() => navigation.goBack()}
          color="white"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.formContainer}
        >
          <Formik
            initialValues={{
              address: '',
              address2: '',
              city: '',
              name: '',
              phone_number: '',
              state: '',
              zipcode: '',
            }}
            validationSchema={addressSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              handleReset,
              values,
            }) => (
              <>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                  placeholder={
                    routeParams?.address
                      ? routeParams.address.name
                      : 'Full name'
                  }
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  keyboardType="default"
                  textContentType="givenName"
                  autoCapitalize="words"
                  autoCorrect={false}
                  returnKeyType="next"
                  touched={touched.name}
                  error={errors.name}
                />

                <Text style={styles.inputTitle}>Phone</Text>
                <TextInput
                  placeholder={
                    routeParams?.address
                      ? routeParams.address.phone_number
                      : 'Phone number'
                  }
                  onChangeText={handleChange('phone_number')}
                  onBlur={handleBlur('phone_number')}
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  returnKeyType="next"
                  touched={touched.phone_number}
                  error={errors.phone_number}
                />

                <Text style={styles.inputTitle}>Address 1</Text>
                <TextInput
                  placeholder={
                    routeParams?.address
                      ? routeParams.address.address
                      : 'Address line 1'
                  }
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  keyboardType="default"
                  textContentType="streetAddressLine1"
                  autoCapitalize="words"
                  returnKeyType="next"
                  touched={touched.address}
                  error={errors.address}
                />

                <Text style={styles.inputTitle}>Address 2</Text>
                <TextInput
                  placeholder="Address Line 2"
                  onChangeText={handleChange('address2')}
                  onBlur={handleBlur('address2')}
                  keyboardType="default"
                  textContentType="streetAddressLine2"
                  autoCapitalize="words"
                  returnKeyType="next"
                  touched={touched.address2}
                  error={errors.address2}
                />

                <Text style={styles.inputTitle}>City</Text>
                <TextInput
                  placeholder={
                    routeParams?.address ? routeParams.address.city : 'City'
                  }
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  keyboardType="default"
                  textContentType="addressCity"
                  returnKeyType="next"
                  touched={touched.city}
                  error={errors.city}
                />

                <Text style={styles.inputTitle}>State</Text>
                <TextInput
                  placeholder={
                    routeParams?.address ? routeParams.address.state : 'State'
                  }
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                  keyboardType="default"
                  textContentType="addressState"
                  returnKeyType="next"
                  touched={touched.state}
                  error={errors.state}
                />

                <Text style={styles.inputTitle}>Zip Code</Text>
                <TextInput
                  placeholder={
                    routeParams?.address
                      ? routeParams.address.zipcode
                      : 'Zip Code'
                  }
                  onChangeText={handleChange('zipcode')}
                  onBlur={handleBlur('zipcode')}
                  keyboardType="default"
                  textContentType="postalCode"
                  returnKeyType="next"
                  touched={touched.zipcode}
                  error={errors.zipcode}
                />

                <View style={styles.buttonContainer}>
                  <Button
                    label={
                      !routeParams?.address ? 'Save Address' : 'Update Address'
                    }
                    onPress={() => handleSubmit(values, handleReset)}
                    width={theme.constants.screenWidth}
                    type="primary"
                  />
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditAddress;
