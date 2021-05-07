import React, { useRef, useState, useEffect } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '../../components';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import { AuthParamList } from '../../types/navigationTypes';
import useLogin from './useLogin';

const Login = ({ navigation }: StackScreenProps<AuthParamList, 'Login'>) => {
  const { loginSchema, onSubmit, loading } = useLogin();

  const inputRef = useRef(null);
  // const [emailError, setEmailError] = useState<any[]>([]);

  // useEffect(() => {
  //   if (arr.length === 1) {
  //     inputRef.current.animate('shake', 500, 'linear');
  //   }
  // }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
      bounces={false}
    >
      <SafeAreaView>
        <ActivityIndicator visible={loading} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.heading}>Welcome,</Text>
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
                <View style={styles.buttonContainer}>
                  <Button
                    label="Login"
                    onPress={handleSubmit}
                    type="primary"
                    width={theme.constants.screenWidth}
                  />
                </View>
              </>
            );
          }}
        </Formik>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTest1}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerTest2}> Register Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
