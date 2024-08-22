import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/auth';
import Button from '../../components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {posts} from '../../constant';
import {
  NavigationAction,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;
export default function Home({navigation}: Props) {
  const {logout} = useAuth();

  return (
    <SafeAreaView>
      <FlatList
        className="px-5 space-y-3"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        data={posts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('detail');
              }}
              className="h-[300px] mb-2 space-y-2 w-full">
              <Image
                className="w-full rounded-md h-[212px]"
                resizeMode="cover"
                source={item.image}
              />
              <View>
                <Text className="text-base leading-[26px] font-semibold text-black-100">
                  {item.title}
                </Text>
                <Text>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
