import {FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {posts} from '../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../route';
import Card from '../../components/card';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;
export default function Home({navigation}: Props) {
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
