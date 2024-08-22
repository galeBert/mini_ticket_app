import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ComicText from './comic-book';
import {icons} from '../constant';

export default function HomeHeader() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        // Shadow properties
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.16,
        shadowRadius: 8,
        elevation: 10,
      }}
      className="px-5 pt-3 pb-5 flex flex-row justify-between items-center">
      <ComicText
        variant="bold"
        className="text-[22px] text-black-100 leading-[26px]">
        Home Of Events
      </ComicText>
      <TouchableOpacity>
        <Image source={icons.qRIcon} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}
