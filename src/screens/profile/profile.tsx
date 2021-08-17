import React from 'react';
import { View, Text, SafeAreaView, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { useQuery } from 'react-query';
import * as Linking from 'expo-linking';
import { CommonActions } from '@react-navigation/native';

import {
  FavoriteIcon,
  NotificationIcon,
  PatientIcon,
  CustomerServiceIcon,
  LogoutIcon,
  AboutUsIcon,
} from '../../svg/profileIcons';
import ordersApi from '../../firebase/orders';
import styles from './styles';
import { theme } from '../../components';
import authFunc from '../../firebase/auth';
import { useAppContext } from '../../context/context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Profile = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Profile'>) => {
  const { user, addUserDetails } = useAppContext();
  const { favorites } = useSelector((state: any) => state.productReducer);

  const userDetails = useQuery('userDetails', authFunc.getUserDetails);

  const { data: orderCount } = useQuery(
    'orderCount',
    async () => await ordersApi.userOrderCount(user.id),
    {
      enabled: !!user.id,
    }
  );

  const handleLogout = async () => {
    try {
      if (user.id) {
        await authFunc.logOutUser();
        addUserDetails({
          id: null,
          displayName: null,
          email: null,
        });
        navigation.dispatch(
          CommonActions.navigate({
            name: 'Home',
          })
        );
        Toast.show({
          type: 'success',
          visibilityTime: 2000,
          autoHide: true,
          text1: 'Logout Success',
          text2: 'You have been successfully logged out',
        });
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Logout Error',
        text2: 'Error logging in',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.notificationContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
          >
            <View>
              <NotificationIcon />
            </View>
          </TouchableOpacity>
        </View>
        {user.id ? (
          <View style={styles.profileContainer}>
            <View style={styles.profileImg} />
            <View style={styles.profileTextContainer}>
              <Text numberOfLines={1} style={styles.profileText}>
                {userDetails.data?.displayName}
              </Text>
              <View style={styles.account}>
                <Animated.Text style={styles.accountText}>
                  Account
                </Animated.Text>
                <Icon
                  name="chevron-right"
                  size={15}
                  color={theme.colors.grey}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.authBanner}>
            <Text style={styles.authText}>
              Sign up or Login to save your profile
            </Text>
          </View>
        )}
        {/* <View style={styles.accountBottom}>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>
              {orderCount && user.id ? orderCount : '0'}
            </Text>
            <Text style={styles.accountBottomText2}>Orders</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>0</Text>
            <Text style={styles.accountBottomText2}>Message</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>
              {user.id ? favorites.length : '0'}
            </Text>
            <Text style={styles.accountBottomText2}>Saved</Text>
          </View>
        </View> */}

        <View style={{ height: heightPercentageToDP(5) }} />

        <View style={styles.others}>
          <View style={styles.othersContainer}>
            <TouchableOpacity
              onPress={() => {
                if (user.id) {
                  navigation.navigate('Saved');
                } else {
                  Toast.show({
                    text1: 'Login Required',
                    text2: 'Sign up or login to add favorites',
                    position: 'top',
                    visibilityTime: 3000,
                    autoHide: true,
                    type: 'info',
                  });
                }
              }}
            >
              <View style={styles.othersItem}>
                <FavoriteIcon />
                <Text style={styles.othersText}>Saved</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (user.id) {
                  navigation.navigate('ManageAddress');
                } else {
                  Toast.show({
                    text1: 'Login Required',
                    text2: 'Sign up or login to add favorites',
                    position: 'top',
                    visibilityTime: 3000,
                    autoHide: true,
                    type: 'info',
                  });
                }
              }}
            >
              <View style={styles.othersItem}>
                <PatientIcon />
                <Text style={styles.othersText}>My Addresses</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+260975356162')}
            >
              <View style={styles.othersItem}>
                <CustomerServiceIcon />
                <Text style={styles.othersText}>Call Customer Service</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.othersItem}
            >
              <View style={styles.othersItem}>
                <AboutUsIcon />
                <Text style={styles.othersText}>Recover Password</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.othersItem}>
              <View style={styles.othersItem}>
                {user.id ? (
                  <LogoutIcon />
                ) : (
                  <LogoutIcon color={theme.colors.green} />
                )}
                <Text style={styles.othersText}>
                  {user.id ? 'Log out' : 'Login or Register'}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
