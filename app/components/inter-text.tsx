import {Text, StyleSheet} from 'react-native';
import type {TextProps} from 'react-native';
import React from 'react';

type InterVariant = 'base' | 'italic';
interface InterTextProps extends TextProps {
  variant?: InterVariant;
}
const getInterTextVariantStyle = (variant: InterVariant) => {
  switch (variant) {
    case 'italic':
      return 'Inter_Italic';
    default:
      return 'Inter';
  }
};

export default function InterText({
  variant = 'base',
  style,
  ...rest
}: InterTextProps) {
  return (
    <Text
      style={[
        {fontFamily: getInterTextVariantStyle(variant)},
        style && StyleSheet.flatten(style),
      ]}
      {...rest}
    />
  );
}
