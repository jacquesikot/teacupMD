import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './styles';
import AddressItem from '../../components/AddressItem/AddressItem';
import StackHeader from '../../components/StackHeader/StackHeader';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileNavParamList } from '../../types/navigationTypes';
import addressApi from '../../firebase/address';
import { useAppContext } from '../../context/context';
import DeliveryAddress from '../../types/deliveryAddress';
import Button from '../../components/Button/Button';
import { theme } from '../../components';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const ManageAddress = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'ManageAddress'>) => {
  const { user } = useAppContext();

  const [addresses, setAddress] = useState<DeliveryAddress[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAddress = async () => {
    setLoading(true);
    const addresses = await addressApi.getUserAddress({
      pageParam: user.id,
    });
    setAddress(addresses);
    setLoading(false);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const deleteAddress = async (id: string) => {
    try {
      Alert.alert(
        'Delete Address',
        'Are you sure you want to delete this address?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: async () => {
              navigation.navigate('Profile');
              await addressApi.deleteUserAddress(id);
              Toast.show({
                type: 'success',
                visibilityTime: 2000,
                autoHide: true,
                text1: 'Address',
                text2: 'Address deleted successfully',
              });
            },
          },
        ]
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        autoHide: true,
        text1: 'Address Error',
        text2: 'Error deleting address',
      });
    }
  };
  useEffect(() => {
    getAddress();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} opacity={1} />
      <SafeAreaView style={styles.container}>
        <StackHeader
          label="Addresses"
          back={() => navigation.goBack()}
          color="white"
        />
        {user.id && addresses.length > 0 ? (
          <>
            <View style={styles.list}>
              <FlatList
                data={addresses}
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item: DeliveryAddress) => item.id.toString()}
                renderItem={({ item }) => (
                  <AddressItem
                    name={item.name}
                    address={item.address}
                    city={item.city}
                    state={item.state}
                    phone={item.phone_number}
                    onPressEdit={() =>
                      navigation.navigate('EditAddress', { address: item })
                    }
                    onPressDelete={() => deleteAddress(item.id)}
                  />
                )}
              />
            </View>
            <Button
              type="primary"
              width={theme.constants.screenWidth}
              label="Add Address"
              onPress={() => navigation.navigate('EditAddress')}
            />
          </>
        ) : (
          <StatusScreen
            heading="Oops, No address found"
            subtext="You havent added any address. Add a delivery address now"
            buttonLabel="Add Address"
            onPress={() => navigation.navigate('EditAddress')}
            image={require('../../../assets/images/noSaved.png')}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default ManageAddress;
