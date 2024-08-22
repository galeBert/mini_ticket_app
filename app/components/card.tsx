import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Post} from '../types/type';

export default function Card({
  data,
  onClick,
  variant = 'base',
}: {
  data: Post;
  onClick: () => void;
  variant?: 'base' | 'small';
}) {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`h-[300px] mb-2 space-y-2 w-full ${
        variant === 'small' ? 'max-w-[200px]' : ''
      }`}>
      <Image
        className="w-full rounded-md h-[212px]"
        resizeMode="cover"
        source={data.image}
      />
      <View>
        <Text
          className={`
          text-base text-primary-text
          ${
            variant === 'small'
              ? 'leading-[24px] font-medium'
              : 'leading-[26px] font-semibold'
          }
          `}>
          {data.title}
        </Text>
        <Text>{data.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
