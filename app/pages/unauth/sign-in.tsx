import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useAuth} from '../../context/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import ComicText from '../../components/comic-book';
import InputField from '../../components/input-field';
import Button from '../../components/button';
import {icons} from '../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';
import InterText from '../../components/inter-text';
type Props = NativeStackScreenProps<RootStackParamList, 'signIn'>;

export default function SignIn({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<{message: string; field: string}>();

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
            <ComicText className="text-heading-xl text-black ">Masuk</ComicText>
            <InterText className="text-[16px] font-medium text-neutral-500">
              Selamat datang kembali!
            </InterText>
          </View>
          {/* body container */}
          <View className="flex flex-col  space-y-5">
            {/* input container */}
            <View className="flex flex-col space-y-3">
              <View>
                <InputField
                  onChangeText={text => setEmail(text)}
                  placeholder="E-mail"
                  errorMessage={
                    error?.field === 'email' ? error.message : undefined
                  }
                />
              </View>
              <View>
                <InputField
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  errorMessage={
                    error?.field === 'password' ? error.message : undefined
                  }
                  rightIcon={() => {
                    return (
                      <TouchableOpacity
                        onPress={() => setShowPassword(prev => !prev)}>
                        <Image
                          className="w-6 h-6"
                          source={showPassword ? icons.eyeOn : icons.eyeOff}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View className="flex w-full items-end">
                <TouchableOpacity className=" flex justify-end">
                  <InterText className="text-[#3FA535] text-[14px] font-medium">
                    Lupa Kata Sandi?
                  </InterText>
                </TouchableOpacity>
              </View>
            </View>
            {/* button and OAuth */}
            <View className="flex flex-col space-y-4">
              {/* button container */}
              <View className="space-y-3 flex flex-col items-center">
                <Button
                  className="w-full"
                  disabled={!email.length || !password.length}
                  onPress={async () => {
                    try {
                      const res = await login({email, password});
                      if (!res.ok) {
                        const errorData = await res.json();
                        setError({
                          message: errorData?.message.message,
                          field: errorData.message.field,
                        });
                      }
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  title="Masuk"
                />
                <View className="text-lg text-center w-full justify-center text-general-200 flex flex-row mt-10">
                  <InterText className="text-sm text-neutral-500 font-normal">
                    Belum punya akun?{' '}
                  </InterText>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signUp')}>
                    <InterText className="text-sm text-green-500 font-medium">
                      Buat Akun
                    </InterText>
                  </TouchableOpacity>
                </View>
              </View>
              {/* separator */}
              <View className="flex flex-row justify-center items-center gap-x-3">
                <View className="flex-1 h-[1px] bg-[#8F9092]" />
                <InterText className="text-sm text-[#8F9092]">atau</InterText>
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
          <InterText className="text-center text-base text-green-500 underline font-bold">
            Lewati, langsung lihat daftar komik
          </InterText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
