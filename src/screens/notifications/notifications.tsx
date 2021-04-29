import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import notifications from './notificationData';

const Notifications = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Notifications'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Notifications"
        back={() => navigation.goBack()}
        color="white"
      />
      <View style={styles.list}>
        <FlatList
          data={notifications}
          keyExtractor={(item: any) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => alert('notification')}
            >
              <NotificationItem
                iconType={item.type}
                title={item.title}
                body={item.body}
                time={item.time}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
