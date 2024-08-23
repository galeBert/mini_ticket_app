import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {posts} from '../../constant';
import Card from '../../components/card';
import InterText from '../../components/inter-text';

type Props = NativeStackScreenProps<RootStackParamList, 'detail', 'postId'>;
export default function DetailPage({navigation, route}: Props) {
  const post = posts.find(data => data.id === route.params.postId);

  if (!post) {
    return (
      <View className="w-full h-full flex justify-center items-center">
        <InterText>Article Not Found</InterText>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView className="flex flex-col space-y-2">
        <View>
          <View className="bg-black max-h-[236px]">
            <Image
              source={post.image}
              className="max-h-[236px] w-full"
              resizeMode="cover"
            />
          </View>
          <View className="p-5 flex flex-col bg-white space-y-5">
            <View className="flex flex-col space-y-1">
              <InterText className="text-xl font-semibold leading-[30px] text-primary-text">
                {post.title}
              </InterText>
              <InterText className="text-secondary-text font-medium text-sm leading-[17px]">
                {post.date}
              </InterText>
            </View>
            {/* captions */}
            <View className="flex flex-col space-y-3">
              <InterText className="text-secondary-text font-normal text-sm leading-[21px]">
                Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a
                enim sed. Sagittis id cursus habitant pellentesque elit
                placerat. Viverra commodo elementum faucibus aliquet malesuada
                quisque non. Blandit vitae id vel mi. Et dictumst mattis elit
                lectus duis imperdiet.
              </InterText>
              <View>
                <InterText className="text-secondary-text font-semibold text-sm leading-[21px]">
                  Credit:
                </InterText>
                <InterText className="text-secondary-text font-normal text-sm leading-[21px]">
                  Lorem ipsum dolor sit amet consectetur. Senectus odio neque
                  augue nulla nulla scelerisque sed quam. Mattis convallis
                  lobortis leo adipiscing congue. Felis nam magna ullamcorper
                  magna velit dui vel tellus.
                </InterText>
              </View>
              <InterText className="text-secondary-text font-normal text-sm leading-[21px]">
                Lorem ipsum dolor sit amet consectetur. Tellus netus eu nunc
                purus semper dolor. Et urna habitant vitae eget risus enim
                morbi. Mattis velit mi adipiscing purus ante libero commodo ut
                at. Id venenatis tellus dolor id morbi viverra eget mus ac. In
                proin fusce.
              </InterText>
              <InterText className="text-secondary-text font-normal text-sm leading-[21px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque eu morbi
                nulla duis morbi sed in arcu enim. Dignissim id et donec neque.
                Morbi etiam id et.
              </InterText>
            </View>
          </View>
        </View>
        {/* carousel */}
        <View className="pl-5 py-5 flex space-y-3 flex-col bg-white h-[375px]">
          <InterText className="text-base leading-[26px] font-semibold text-primary-text">
            Other Event
          </InterText>
          <FlatList
            horizontal
            className=" w-full"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            data={posts.filter(data => data.id !== post.id)}
            renderItem={({item}) => {
              return (
                <View className="min-w-[200px] mr-2">
                  <Card
                    variant="small"
                    data={item}
                    onClick={() => {
                      navigation.navigate('detail', {
                        postId: item.id,
                      });
                    }}
                    key={item.id}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
