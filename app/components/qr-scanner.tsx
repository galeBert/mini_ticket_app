import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import * as ImagePicker from 'react-native-image-picker';
import {icons} from '../constant';
import {FlashlightIcon, FlashlightOff, X} from 'lucide-react-native';
import ReactNativeModal from 'react-native-modal';
import Button from './button';

export default function QrScannerPage() {
  const [isFlashOn, setisFlashOn] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleFlash = () => {
    setisFlashOn(prev => !prev);
  };
  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
        reactivate
        showMarker
        reactivateTimeout={2000}
        onRead={data => {
          if (!isModalOpen) {
            if (data.data) {
              if (data.data.includes('miniticket://app')) {
                Linking.openURL(data.data).catch(e => {
                  console.log(e);
                });
              } else {
                setisModalOpen(true);
              }
            }
          }
        }}
        flashMode={
          isFlashOn
            ? RNCamera.Constants.FlashMode.off
            : RNCamera.Constants.FlashMode.torch
        }
        topContent={
          <View>
            <Text className="text-primary-text text-lg">
              Helo, Please Scan you ticket Here!
            </Text>
          </View>
        }
        bottomContent={
          <View className="w-full h-full flex items-center justify-center p-3">
            <TouchableOpacity
              className={`w-10 h-10 mt-10 flex p-2 rounded-full  flex-col items-center
              ${isFlashOn ? 'bg-green-400' : 'bg-primary-text'}
              `}
              onPress={handleFlash}>
              {isFlashOn ? (
                <FlashlightIcon color="black" size={24} />
              ) : (
                <FlashlightOff color="white" size={24} />
              )}
            </TouchableOpacity>
            <Text className="mt-1">Flash {isFlashOn ? 'on' : 'off'}</Text>
          </View>
        }
      />
      <ReactNativeModal isVisible={isModalOpen}>
        <View className="bg-white px-7 py-9 flex flex-col justify-center items-center space-y-4 rounded-2xl min-h-[300px]">
          <View className="rounded-full w-[100px] h-[100px] flex justify-center items-center p-3 bg-red-100">
            <X size={50} color="white" className="" />
          </View>
          <Text className="text-xl font-JakartaBold text-center">
            Wrong QR Please Try Again!
          </Text>
          <Button
            className="!bg-black"
            title="OK"
            onPress={() => setisModalOpen(false)}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
}
