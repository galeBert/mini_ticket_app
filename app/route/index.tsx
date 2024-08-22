import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAuth} from '../context/auth';
import Home from '../pages/authenticated/home';
import SignIn from '../pages/unauth/sign-in';
import {View, Text} from 'react-native';
import SignUp from '../pages/unauth/sign-up';
import DetailPage from '../pages/authenticated/detail';
import HomeHeader from '../components/home-header';

export type RootStackParamList = {
  home: undefined;
  detail: undefined;
  signIn: undefined;
  signUp: undefined;
  // profile: {userId: string};
  // Feed: {sort: 'latest' | 'top'} | undefined;
};
export default function Route() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {isLoggedIn, isLoading} = useAuth();

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShadowVisible: true,
              header: () => <HomeHeader />,
            }}
          />
          <Stack.Screen name="detail" component={DetailPage} options={{}} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
