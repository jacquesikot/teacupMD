import { Product } from './product';

export interface User {
  id: string | null;
  displayName: string | null;
  email: string | null;
}

export type ACTIONS =
  | 'ADD_TO_CART'
  | 'REMOVE_FROM_CART'
  | 'INCREASE_COUNT'
  | 'DECREASE_COUNT'
  | 'EMPTY_CART';

export interface ProductOrder extends Product {
  quantity?: number;
}

export interface AppContext {
  user: User;
  addUserDetails: (userDetails: User) => void;
  cart: ProductOrder[];
  isProductInCart: (product: ProductOrder) => boolean;
  manageCart: (
    actions: ACTIONS,
    product?: ProductOrder,
    quantity?: number
  ) => void;
  cartTotal: number;
}
