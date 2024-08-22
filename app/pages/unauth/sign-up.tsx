import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import ComicText from '../../components/comic-book';
import InputField from '../../components/input-field';
import Button from '../../components/button';
import {Link} from '@react-navigation/native';
import {icons} from '../../constant';

export default function SignUp() {
  const {login} = useAuth();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="relative h-full">
        <View className="bg-[#3D3D3E] -rotate-[36.48deg] shadow-zinc-300 w-[100px] h-[100px] absolute -right-[49px] top-10" />
        <View className="bg-[#3FA535] w-[200px] h-[200px] absolute right-0 top-0 rounded-full translate-x-[12px] -translate-y-[114px]" />
        {/* main container */}
        <SafeAreaView className="mx-5 space-y-4">
          {/* title container */}
          <View className="mt-20 space-y-2">
            <ComicText className="text-heading-xl text-black">Daftar</ComicText>
            <Text className="text-[16px] font-medium text-neutral-500">
              Selamat datang!
            </Text>
          </View>
          {/* body container */}
          <View className="flex flex-col  space-y-5">
            {/* input container */}
            <View className="flex flex-col space-y-3">
              <View>
                <InputField placeholder="E-mail" />
              </View>
              <View>
                <InputField placeholder="Password" secureTextEntry />
              </View>
              <View className="flex w-full items-end"></View>
            </View>
            {/* button and OAuth */}
            <View className="flex flex-col space-y-4">
              {/* button container */}
              <View className="space-y-3 flex flex-col items-center">
                <Button className="w-full" disabled title="Masuk" />
                <Link
                  className="text-lg text-center w-full text-general-200 mt-10"
                  to="/signIn">
                  <Text className="text-sm text-neutral-500 font-normal">
                    Sudah punya akun?{' '}
                  </Text>
                  <Text className="text-sm text-green-500 font-medium">
                    Masuk Akun
                  </Text>
                </Link>
              </View>
              {/* separator */}
              <View className="flex flex-row justify-center items-center gap-x-3">
                <View className="flex-1 h-[1px] bg-[#8F9092]" />
                <Text className="text-sm text-[#8F9092]">atau</Text>
                <View className="flex-1 h-[1px] bg-[#8F9092]" />
              </View>
              <View>
                <Button
                  textVariant="sm"
                  bgVariant="outline"
                  title="Google"
                  Icon={() => {
                    return (
                      <Image
                        className="w-6 h-6"
                        source={icons.google}
                        resizeMode="contain"
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View className="w-full absolute bottom-16">
          <Text className="text-center text-base text-green-500 underline font-bold">
            Lewati, langsung lihat daftar komik
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
