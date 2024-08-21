import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isLoggedIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}
const AuthContext = createContext<AuthState | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      setisLoggedIn(true);
      await AsyncStorage.setItem('isLoggedIn', 'true');
    } catch (e) {
      console.log('LOGIN_ERROR', e);
    }
  };
  const logout = async () => {
    try {
      setisLoggedIn(false);
      await AsyncStorage.removeItem('isLoggedIn');
    } catch (e) {
      console.log('LOGIN_ERROR', e);
    }
  };
  const getLoginData = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null) {
        return value as unknown as boolean;
      }
      return false;
    } catch (e) {
      console.log('GET_LOGIN_ERROR', e);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const test = async () => {
      await getLoginData().then(data => setisLoggedIn(data));
    };
    test();
  }, []);

  const value = useMemo(
    () => ({isLoggedIn, isLoading, login, logout}),
    [isLoggedIn, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
export {AuthProvider, useAuth};
