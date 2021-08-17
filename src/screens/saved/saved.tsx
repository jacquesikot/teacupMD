import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, SafeAreaView, FlatList } from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { CommonActions } from '@react-navigation/routers';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';
import { useDispatch } from 'react-redux';

import { ProfileNavParamList } from '../../types/navigationTypes';
import styles, { PRODUCT_WIDTH, PRODUCT_HEIGHT, MARGIN_RIGHT } from './styles';
import Product from '../../components/Product/Product';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import { removeFavorite } from '../../redux/actions';
import { Product as ProductProps } from '../../types/product';
import favoritesApi from '../../firebase/userFavorite';
import { useAppContext } from '../../context/context';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const Saved = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Saved'>) => {
  // const { favorites } = useSelector((state: any) => state.productReducer);
  const dispatch = useDispatch();
  const removeFromFavorites = (favorite: any) =>
    dispatch(removeFavorite(favorite));
  const handleRemoveFavorite = (favorite: any) => {
    removeFromFavorites(favorite);
  };

  const deleteFavorite = async (product: ProductProps) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Profile');
    try {
      handleRemoveFavorite(product);
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

  const { user } = useAppContext();

  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadFavorites = async () => {
    setLoading(true);
    const result = await favoritesApi.getUserFavorites(user.id || '');
    setFavorites(result);
    setLoading(false);
  };

  useEffect(() => {
    void loadFavorites();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator visible={loading} opacity={1} />
      <StackHeader
        label="Saved Products"
        back={() => navigation.goBack()}
        color="light"
      />
      {favorites.length !== 0 ? (
        <View style={styles.productGrid}>
          <FlatList
            data={favorites}
            numColumns={2}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="white"
                label={item.title}
                image={item.image && item.image}
                price={item.price}
                sale={item.sale_price ? item.sale_price : ''}
                qty={item.quantity}
                main_content={item.main_content ? item.main_content : ''}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                width={PRODUCT_WIDTH}
                height={PRODUCT_HEIGHT}
                saved={() => deleteFavorite(item)}
                marginRight={MARGIN_RIGHT}
              />
            )}
          />
        </View>
      ) : (
        <View>
          <StatusScreen
            heading="Oppss!"
            subtext="Sorry, you have no saved products"
            buttonLabel="Start adding"
            image={require('../../../assets/images/noSaved.png')}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Home',
                })
              )
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Saved;
