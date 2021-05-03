import React from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { Formik } from 'formik';

import styles from './styles';
import { theme } from '../../components';
import { AuthParamList } from '../../types/navigationTypes';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import useRegister from './useRegister';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const Register = ({
  navigation,
}: StackScreenProps<AuthParamList, 'Register'>) => {
  const { registerSchema, onSubmit, loading } = useRegister();

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Formik
        initialValues={{ fullName: '', email: '', phone: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'position' : 'height'}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
                style={styles.backContainer}
              >
                <Icon name="chevron-left" size={20} color={theme.colors.dark} />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>Create Account</Text>
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="Full Name"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  touched={touched.fullName}
                  error={errors.fullName}
                  keyboardType="default"
                  autoCapitalize="words"
                  autoCompleteType="name"
                />
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                  error={errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                />
                <TextInput
                  placeholder="Phone Number"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  touched={touched.phone}
                  error={errors.phone}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  autoCompleteType="tel"
                />
                <TextInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                  secureTextEntry={true}
                  keyboardType="default"
                  autoCapitalize="none"
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }} />
            <View style={styles.buttonContainer}>
              <Button
                label="Complete Registeration"
                onPress={handleSubmit}
                type="primary"
                width={theme.constants.screenWidth}
              />
            </View>
          </>
        )}
      </Formik>
      <View style={styles.termsOfUseContainer}>
        <Text style={styles.termsOfUseText1}>
          By creating an account you agree with our
        </Text>
        <TouchableOpacity onPress={() => true}>
          <Text style={styles.termsOfUseText2}>
            Terms of Use and Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
