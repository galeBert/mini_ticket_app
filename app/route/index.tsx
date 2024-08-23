import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAuth} from '../context/auth';
import Home from '../pages/authenticated/home';
import SignIn from '../pages/unauth/sign-in';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SignUp from '../pages/unauth/sign-up';
import DetailPage from '../pages/authenticated/detail';
import CustomHeader from '../components/custom-header';
import ComicText from '../components/comic-book';
import {icons, posts} from '../constant';
import QrScannerPage from '../components/qr-scanner';

export type RootStackParamList = {
  home: undefined;
  detail: {postId: string};
  qr: undefined;
  signIn: undefined;
  signUp: undefined;
};
export default function Route() {
  const {logout} = useAuth();
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
              header: ({navigation}) => (
                <CustomHeader
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <ComicText
                    onPress={() => logout()}
                    variant="bold"
                    className="text-[22px] text-primary-text leading-[26px]">
                    Home Of Events
                  </ComicText>
                  <TouchableOpacity onPress={() => navigation.navigate('qr')}>
                    <Image
                      source={icons.qRIcon}
                      className="w-6 h-6"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </CustomHeader>
              ),
            }}
          />
          <Stack.Screen
            name="detail"
            component={DetailPage}
            options={{
              header: ({navigation, route}) => {
                const {postId} = route.params as any;
                const title = posts.find(data => data.id === postId);
                return (
                  <CustomHeader
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                        source={icons.chevronLeft}
                        className="w-6 h-6"
                        resizeMode="contain"
                      />
                    </TouchableOpacity>

                    <ComicText
                      numberOfLines={1}
                      variant="bold"
                      className="text-[22px] text-left text-primary-text leading-[26px]">
                      {title?.title ?? 'Not Found'}
                    </ComicText>
                  </CustomHeader>
                );
              },
            }}
          />
          <Stack.Screen
            name="qr"
            component={QrScannerPage}
            options={{
              title: 'Scan Ticket Here',
              headerTitleStyle: {fontFamily: 'Comic_Book'},
            }}
          />
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
