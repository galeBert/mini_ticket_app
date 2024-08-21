import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/auth';
import Button from '../../components/button';

export default function Home() {
  const {logout} = useAuth();
  return (
    <View className="bg-white text-lg flex-1 items-center justify-center">
      <Text className="text-2xl">Home Screen</Text>
      <Button onPress={() => logout()}></Button>
    </View>
  );
}
