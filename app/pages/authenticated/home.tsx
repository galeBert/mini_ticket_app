import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import {posts} from '../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';
import Card from '../../components/card';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;
export default function Home({navigation}: Props) {
  const {logout} = useAuth();

  return (
    <SafeAreaView className="bg-white">
      <FlatList
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        data={posts}
        renderItem={({item}) => {
          return (
            <Card
              data={item}
              onClick={() => {
                navigation.navigate('detail', {
                  postId: item.id,
                  title: item.title,
                });
              }}
              key={item.id}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}
