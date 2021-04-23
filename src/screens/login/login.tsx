import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';

import styles from './styles';
import { theme } from '../../components';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { AuthParamList } from '../../types/navigationTypes';
import useLogin from './useLogin';

const Login = ({ navigation }: StackScreenProps<AuthParamList, 'Login'>) => {
  const { loginSchema, onSubmit, loading } = useLogin();

  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.heading}>Welcome,</Text>
          <Text style={styles.subText}>sign in to continue</Text>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  touched={touched.email}
                  error={errors.email}
                />

                <TextInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotPasswordContainer}
              >
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              <View style={{ flex: 1 }} />
              <Button
                label="Login"
                onPress={handleSubmit}
                type="primary"
                width={theme.constants.screenWidth}
              />
            </>
          )}
        </Formik>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTest1}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTest2}> Register Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default Login;
