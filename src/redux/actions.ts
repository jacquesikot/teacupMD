import { Product } from '../types/product';
import favoritesApi from '../firebase/userFavorite';

export const ADD_FAVORITE_ITEM = 'ADD_FVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVFE_FAVORITE_ITEM';

export const addFavorite =
  (product: Product, user_id: string) => async (dispatch: any) => {
    const favoriteData = {
      product_id: product.id,
      category: product.category,
      details: product.details,
      images: product.images,
      nutrition_details: product.nutrition_details,
      price: product.price,
      qty: product.qty,
      main_content: product.main_content,
      sale_price: product.sale_price ? product.sale_price : '0',
      title: product.title,
      user_id,
    };
    const id = await favoritesApi.addToFavorites(favoriteData);

    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: { ...favoriteData, id },
    });
  };

export const removeFavorite = (favorite: any) => async (dispatch: any) => {
  await favoritesApi.deleteFavorite(favorite.id);
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: favorite,
  });
};
