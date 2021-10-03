import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';
import { Feather as Icon } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { CommonActions } from '@react-navigation/native';

import firebaseFunc from '../../firebase/auth';
import styles from './styles';
import { theme } from '../../components';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import { AuthParamList } from '../../types/navigationTypes';
import useLogin from './useLogin';

const Login = ({ navigation }: StackScreenProps<AuthParamList, 'Login'>) => {
  const { loginSchema } = useLogin();
  const [loading, setLoading] = useState<boolean>(false);

  interface LoginProps {
    email: string;
    password: string;
  }

  const onSubmit = async (values: LoginProps) => {
    try {
      setLoading(true);
      await firebaseFunc.signInUser(values.email, values.password);
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
        })
      );
      setLoading(false);
      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Login Success',
        text2: 'You have been successfully logged in',
      });
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Login Error',
        text2: error.toString(),
      });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center', height: '100%' }}
      bounces={false}
    >
      <SafeAreaView>
        <ActivityIndicator visible={loading} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.heading}>Login,</Text>
          <Text style={styles.subText}>sign in to continue</Text>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => {
            // if (errors.email && touched.email && ) {
            //   inputRef.current.animate('shake', 500, 'linear');
            // }

            return (
              <>
                <View style={styles.formContainer}>
                  <TextInput
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    touched={touched.email}
                    error={errors.email}
                  />

                  <TextInput
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    touched={touched.password}
                    error={errors.password}
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secured={true}
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

                <View style={styles.buttonContainer}>
                  <Button
                    label="Login"
                    onPress={handleSubmit}
                    type="primary"
                    width={theme.constants.screenWidth}
                  />
                </View>

                <View style={styles.registerContainer}>
                  <Text style={styles.registerTest1}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                  >
                    <Text style={styles.registerTest2}> Register Now</Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
