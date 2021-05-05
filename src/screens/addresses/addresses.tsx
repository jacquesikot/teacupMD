import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Formik } from 'formik';

import styles, { FORM_WIDTH } from './styles';
import StackHeader from '../../components/StackHeader/StackHeader';
import TextInput from '../../components/TextInput/TextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import { theme } from '../../components';
import Button from '../../components/Button/Button';
import useAddresses from './useAddresses';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const Addresses = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Addresses'>) => {
  const { loading, handleSubmit, addressSchema, userAddress } = useAddresses();

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={0.8} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'position' : 'height'}
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
          {userAddress.length < 1 ? (
            <View style={styles.addressStatus}>
              <Text style={styles.addressStatusText}>
                User address not found, add address below.
              </Text>
            </View>
          ) : (
            <View style={styles.addressStatus2}>
              <Text style={styles.addressStatusText}>
                Address Found: {userAddress[0].name.trim()},{' '}
                {userAddress[0].phone_number}, {userAddress[0].address},{' '}
                {userAddress[0].city}, {userAddress[0].state},{' '}
                {userAddress[0].zipcode}
              </Text>
            </View>
          )}

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
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                  placeholder="Full name"
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
                  placeholder="Phone number"
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
                  placeholder="Address Line 1"
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
                  placeholder="City"
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
                  placeholder="State"
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
                  placeholder="Zip Code"
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
                      userAddress.length < 1 ? 'Save Address' : 'Update Address'
                    }
                    onPress={handleSubmit}
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

export default Addresses;
