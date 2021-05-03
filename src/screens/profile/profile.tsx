import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, Text, SafeAreaView, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import {
  FavoriteIcon,
  NotificationIcon,
  PatientIcon,
  CustomerServiceIcon,
  LogoutIcon,
  AboutUsIcon,
} from '../../svg/profileIcons';

import styles from './styles';
import { theme } from '../../components';
import authFunc from '../../firebase/auth';
import { useAppContext } from '../../context/context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import FavoritesApi from '../../firebase/userFavorite';

const Profile = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Profile'>) => {
  const { user } = useAppContext();

  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  const x = useRef(new Animated.Value(0)).current;
  const x1 = useRef(new Animated.Value(0)).current;
  const x2 = useRef(new Animated.Value(0)).current;
  const x3 = useRef(new Animated.Value(0)).current;
  const x4 = useRef(new Animated.Value(0)).current;

  const animate = () => {
    return Animated.parallel([
      Animated.timing(x, {
        useNativeDriver: true,
        toValue: 1,
        duration: 700,
      }),
      Animated.timing(x1, {
        useNativeDriver: true,
        toValue: 1,
        duration: 800,
      }),
      Animated.timing(x2, {
        useNativeDriver: true,
        toValue: 1,
        duration: 900,
      }),
      Animated.timing(x3, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(x4, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1100,
      }),
    ]).start();
  };

  const isFocused = useIsFocused();

  if (isFocused) animate();

  const getfavoriteCount = async () => {
    const res = await FavoritesApi.getUserFavorites(user.id);
    setFavoriteCount(res.length);
  };

  useEffect(() => {
    getfavoriteCount();
  }, []);

  const translateX = x.interpolate({
    inputRange: [0, 1],
    outputRange: [-theme.constants.screenWidth, 0],
  });

  const translateX1 = x1.interpolate({
    inputRange: [0, 1],
    outputRange: [-theme.constants.screenWidth, 0],
  });

  const translateX2 = x2.interpolate({
    inputRange: [0, 1],
    outputRange: [-theme.constants.screenWidth, 0],
  });

  const translateX3 = x3.interpolate({
    inputRange: [0, 1],
    outputRange: [-theme.constants.screenWidth, 0],
  });

  const translateX4 = x4.interpolate({
    inputRange: [0, 1],
    outputRange: [-theme.constants.screenWidth, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.notificationContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
          >
            <Animated.View style={{ opacity: x }}>
              <NotificationIcon />
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText}> {user.displayName} </Text>
            <View style={styles.account}>
              <Animated.Text style={styles.accountText}>Account</Animated.Text>
              <Icon name="chevron-right" size={15} color={theme.colors.grey} />
            </View>
          </View>
        </View>
        <Animated.View style={[styles.accountBottom, { opacity: x }]}>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>0</Text>
            <Text style={styles.accountBottomText2}>Orders</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>0</Text>
            <Text style={styles.accountBottomText2}>Message</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>{favoriteCount}</Text>
            <Text style={styles.accountBottomText2}>Saved</Text>
          </View>
        </Animated.View>
        <View style={styles.others}>
          <View style={styles.othersContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Saved')}>
              <Animated.View
                style={[
                  styles.othersItem,
                  { transform: [{ translateX: translateX }], opacity: x },
                ]}
              >
                <FavoriteIcon />
                <Text style={styles.othersText}>Saved</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Addresses')}>
              <Animated.View
                style={[
                  styles.othersItem,
                  { transform: [{ translateX: translateX1 }], opacity: x1 },
                ]}
              >
                <PatientIcon />
                <Text style={styles.othersText}>My Addresses</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => navigation.navigate('CustomerService')}
            >
              <Animated.View
                style={[
                  styles.othersItem,
                  { transform: [{ translateX: translateX2 }], opacity: x2 },
                ]}
              >
                <CustomerServiceIcon />
                <Text style={styles.othersText}>Customer Service</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => true} style={styles.othersItem}>
              <Animated.View
                style={[
                  styles.othersItem,
                  { transform: [{ translateX: translateX3 }], opacity: x3 },
                ]}
              >
                <AboutUsIcon />
                <Text style={styles.othersText}>About Us</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => authFunc.logOutUser()}
              style={styles.othersItem}
            >
              <Animated.View
                style={[
                  styles.othersItem,
                  { transform: [{ translateX: translateX4 }], opacity: x4 },
                ]}
              >
                <LogoutIcon />
                <Text style={styles.othersText}>Log out</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
