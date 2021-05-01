import React, {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';

import { ACTIONS, AppContext, ProductOrder, User } from '../types/contexttypes';

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  user: {
    displayName: '',
    email: '',
  },
  addUserDetails: () => {},
  cart: [],
  manageCart: () => {},
  isProductInCart: () => false,
  cartTotal: 0,
});

const Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User>({
    displayName: '',
    email: '',
  });
  const [cart, setCart] = useState<ProductOrder[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const addUserDetails = (userDetails: User) => {
    setUser(userDetails);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(
      (item) =>
        (total +=
          item.quantity! *
          Number(
            Number(item.sale_price) > 0
              ? Number(item.sale_price)
              : Number(item.price)
          ))
    );
    setCartTotal(Number(total.toFixed(2)));
  };

  const isProductInCart = (item: ProductOrder) => {
    if (cart.find((product) => product.id === item.id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const manageCart = (
    action: ACTIONS,
    product?: ProductOrder,
    quantity?: number
  ) => {
    switch (action) {
      case 'ADD_TO_CART':
        if (isProductInCart(product!)) {
          return;
        }
        product!.quantity = quantity;
        setCart([...cart, product!]);
        break;
      case 'REMOVE_FROM_CART':
        setCart(cart.filter((cartItem) => cartItem.id !== product!.id));
        break;
      case 'EMPTY_CART':
        setCart([]);
        break;
      case 'INCREASE_COUNT':
        product!.quantity!++;
      case 'DECREASE_COUNT':
        product!.quantity!--;
      default:
        break;
    }
  };

  const state: AppContext = {
    user,
    addUserDetails,
    cart,
    cartTotal,
    isProductInCart,
    manageCart,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
