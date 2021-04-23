export interface User {
  displayName: string | null;
  email: string | null;
}

export interface AppContext {
  user: User;
  addUserDetails: (userDetails: User) => void;
}
