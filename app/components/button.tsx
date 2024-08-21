import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonProps} from '../types/type';

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'sm':
      return 'text-[15px]';
    case 'base':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    default:
      return 'text-base';
  }
};

export default function Button({
  onPress,
  title,
  disabled,
  className,
  Icon,
  bgVariant = 'primary',
  textVariant = 'base',
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`
      flex flex-row space-x-3 rounded-full py-[17.5px] items-center w-full justify-center
      ${disabled ? 'bg-[#A3D69D]' : 'bg-[#60B558]'}
      ${
        bgVariant === 'outline'
          ? '!bg-transparent border-2 border-[#EAE9E9]'
          : ''
      }
      ${className}
      `}
      disabled={disabled}
      onPress={onPress}
      {...rest}>
      {Icon && <Icon />}
      <Text
        className={`
       text-[#F8F8F8] font-medium
       ${getTextVariantStyle(textVariant)}
      ${bgVariant === 'outline' ? 'text-black-100' : ''}
      `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
