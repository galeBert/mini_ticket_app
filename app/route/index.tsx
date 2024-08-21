import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAuth} from '../context/auth';
import Home from '../pages/authenticated/home';
import SignIn from '../pages/unauth/sign-in';
import {View, Text} from 'react-native';
import SignUp from '../pages/unauth/sign-up';

export default function Route() {
  const Stack = createNativeStackNavigator();
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
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="sign-in"
            component={SignIn}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="sign-up"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
