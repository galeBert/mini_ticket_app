import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {users} from '../constant';

interface AuthState {
  isLoggedIn: boolean;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Response>;
  logout: () => Promise<void>;
  isLoading: boolean;
}
const AuthContext = createContext<AuthState | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const findUser = users.find(user => user.email === email);

      if (findUser) {
        const rightPassword = findUser.password === password;
        if (rightPassword) {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          setisLoggedIn(true);
          const response = new Response(JSON.stringify({data: findUser}), {
            status: 200,
          });
          return response;
        } else {
          throw new Error(
            JSON.stringify({message: 'Password salah!', field: 'password'}),
          );
        }
      } else {
        throw new Error(
          JSON.stringify({message: 'Email tidak terdaftar', field: 'email'}),
        );
      }
    } catch (err) {
      const error = err as unknown as Error;
      console.log('LOGIN_ERROR', err);

      const response = new Response(
        JSON.stringify({data: null, message: JSON.parse(error.message)}),
        {
          status: 400,
        },
      );
      return response;
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
