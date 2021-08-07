import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import notifications from './notificationData';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import Picker from '../../components/Picker';

const Notifications = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Notifications'>) => {
  const notif = false;

  const [visible, setVisible] = useState<boolean>(false);

  const [value, setValue] = useState<string>('');

  const data = [
    { label: 'lab1', value: 'val1' },
    { label: 'lab2', value: 'val2' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Notifications"
        back={() => navigation.goBack()}
        color="white"
      />
      {notif ? (
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
      ) : (
        <View>
          <StatusScreen
            image={require('../../../assets/images/noSaved.png')}
            heading="Oppss!"
            subtext="Sorry, you have no notifications"
            buttonLabel="Go back"
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notifications;
