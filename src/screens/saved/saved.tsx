import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, SafeAreaView, FlatList } from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { CommonActions } from '@react-navigation/routers';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

import { ProfileNavParamList } from '../../types/navigationTypes';
import styles, { PRODUCT_WIDTH, PRODUCT_HEIGHT, MARGIN_RIGHT } from './styles';
import Product from '../../components/Product/Product';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import { useAppContext } from '../../context/context';
import favoritesApi from '../../firebase/userFavorite';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import * as Animatable from 'react-native-animatable';

const Saved = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Saved'>) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAppContext();

  const getFavorites = async () => {
    setLoading(true);
    const res = await favoritesApi.getUserFavorites(user.id);
    setFavorites(res);
    setLoading(false);
  };

  const deleteFavorite = async (favorite_id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Profile');
    try {
      await favoritesApi.deleteFavorite(favorite_id);
      return Toast.show({
        text1: 'Favorites',
        text2: 'Product removed from favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'success',
      });
    } catch (error) {
      Toast.show({
        text1: 'Favorites',
        text2: 'Error removing product from favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Saved Products"
        back={() => navigation.goBack()}
        color="white"
      />
      <ActivityIndicator visible={loading} opacity={1} />
      {favorites.length > 0 ? (
        <View style={styles.productGrid}>
          <FlatList
            data={favorites}
            numColumns={2}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                width={PRODUCT_WIDTH}
                height={PRODUCT_HEIGHT}
                sale={item.sale_price}
                saved={() => deleteFavorite(item.id)}
                marginRight={MARGIN_RIGHT}
              />
            )}
          />
        </View>
      ) : (
        <Animatable.View animation="zoomIn">
          <StatusScreen
            heading="Oppss!"
            subtext="Sorry, you have no saved products"
            buttonLabel="Start adding"
            image={require('../../../assets/images/emptyCart.png')}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Home',
                })
              )
            }
          />
        </Animatable.View>
      )}
    </SafeAreaView>
  );
};

export default Saved;
