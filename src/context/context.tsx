import React, {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';

import { AppContext, User } from '../types/contexttypes';

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  user: {
    displayName: '',
    email: '',
  },
  addUserDetails: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User>({
    displayName: '',
    email: '',
  });

  const addUserDetails = (userDetails: User) => {
    setUser(userDetails);
  };

  const state: AppContext = {
    user,
    addUserDetails,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
