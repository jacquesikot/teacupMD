import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles, { FORM_WIDTH } from './styles';
import StackHeader from '../../components/StackHeader/StackHeader';
import TextInput from '../../components/TextInput/TextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import { theme } from '../../components';
import Button from '../../components/Button/Button';

const Addresses = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Addresses'>) => {
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput placeholder="Full name" />
          <Text style={styles.inputTitle}>Phone</Text>
          <TextInput placeholder="Phone number" />
          <Text style={styles.inputTitle}>Address 1</Text>
          <TextInput placeholder="Address Line 1" />
          <Text style={styles.inputTitle}>Address 2</Text>
          <TextInput placeholder="Address Line 2" />
          <Text style={styles.inputTitle}>City</Text>
          <TextInput placeholder="City" />
          <View style={styles.row}>
            <View>
              <Text style={styles.inputTitle}>State</Text>
              <TextInput width={FORM_WIDTH} placeholder="State" />
            </View>
            <View>
              <Text style={styles.inputTitle}>Zip Code</Text>
              <TextInput width={FORM_WIDTH} placeholder="Zip Code" />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              label="Save Address"
              onPress={() => alert('save address')}
              width={theme.constants.screenWidth}
              type="primary"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Addresses;
