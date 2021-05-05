import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from './actions';

const initialState = {
  favorites: [],
};

function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite: any) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default productReducer;
