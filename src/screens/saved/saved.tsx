import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, SafeAreaView, FlatList } from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { CommonActions } from '@react-navigation/routers';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';
import { useSelector, useDispatch } from 'react-redux';

import { ProfileNavParamList } from '../../types/navigationTypes';
import styles, { PRODUCT_WIDTH, PRODUCT_HEIGHT, MARGIN_RIGHT } from './styles';
import Product from '../../components/Product/Product';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import { removeFavorite } from '../../redux/actions';
import { Product as ProductProps } from '../../types/product';

const Saved = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'Saved'>) => {
  const { favorites } = useSelector((state: any) => state.productReducer);
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

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Saved Products"
        back={() => navigation.goBack()}
        color="white"
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
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                qty={item.qty}
                main_content={item.main_content}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                width={PRODUCT_WIDTH}
                height={PRODUCT_HEIGHT}
                sale={item.sale_price}
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
