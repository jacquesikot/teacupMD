import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import {
  FavoriteIcon,
  NotificationIcon,
  DoctorIcon,
  PatientIcon,
  CustomerServiceIcon,
  CartIcon,
  ConsultIcon,
  LectureIcon,
  AppointmentIcon,
} from '../../svg/profileIcons';

import styles from './styles';
import { theme } from '../../components';
import authFunc from '../../firebase/auth';
import { useAppContext } from '../../context/context';

const Profile = () => {
  const { user } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.notificationContainer}>
          <TouchableOpacity onPress={() => true}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText}> {user.displayName} </Text>
            <View style={styles.account}>
              <Text style={styles.accountText}>Account</Text>
              <Icon name="chevron-right" size={15} color={theme.colors.grey} />
            </View>
          </View>
        </View>
        <View style={styles.accountBottom}>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>3</Text>
            <Text style={styles.accountBottomText2}>Orders</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>1</Text>
            <Text style={styles.accountBottomText2}>Message</Text>
          </View>
          <View style={styles.accountBottomItem}>
            <Text style={styles.accountBottomText1}>10</Text>
            <Text style={styles.accountBottomText2}>Cart</Text>
          </View>
        </View>
        <View style={styles.services}>
          <Text style={styles.heading}>Service</Text>
          <View style={styles.serviceContainer}>
            <TouchableOpacity style={styles.serviceItem}>
              <CartIcon />
              <Text style={styles.serviceItemText}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <ConsultIcon />
              <Text style={styles.serviceItemText}>Consultation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <AppointmentIcon />
              <Text style={styles.serviceItemText}>Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <LectureIcon />
              <Text style={styles.serviceItemText}>Lectures</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.others}>
          <Text style={styles.heading}>Others</Text>
          <View style={styles.othersContainer}>
            <TouchableOpacity onPress={() => true} style={styles.othersItem}>
              <>
                <FavoriteIcon />
                <Text style={styles.othersText}>My Favorite</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => true} style={styles.othersItem}>
              <>
                <DoctorIcon />
                <Text style={styles.othersText}>Private Doctors</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => true} style={styles.othersItem}>
              <>
                <PatientIcon />
                <Text style={styles.othersText}>Patient Information</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => authFunc.logOutUser()}
              style={styles.othersItem}
            >
              <>
                <CustomerServiceIcon />
                <Text style={styles.othersText}>Customer Service</Text>
                <View style={{ flex: 1 }} />
                <Icon
                  name="chevron-right"
                  size={20}
                  color={theme.colors.grey}
                />
              </>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
