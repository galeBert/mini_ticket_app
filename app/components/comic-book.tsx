import {Text, StyleSheet} from 'react-native';
import type {TextProps} from 'react-native';
import React from 'react';

type ComicBookVariant = 'base' | 'bold' | 'italic' | 'bold-italic';
interface ComicTextProps extends TextProps {
  children: string | number;
  variant?: ComicBookVariant;
}
const getComicTextVariantStyle = (variant: ComicBookVariant) => {
  switch (variant) {
    case 'bold':
      return 'Comic_Book_Bold';
    case 'italic':
      return 'Comic_Book_Italic';
    case 'bold-italic':
      return 'Comic_Book_Bold_Italic';
    default:
      return 'Comic_Book';
  }
};

export default function ComicText({
  children,
  variant = 'base',
  style,
  ...rest
}: ComicTextProps) {
  return (
    <Text
      style={[
        {fontFamily: getComicTextVariantStyle(variant)},
        style && StyleSheet.flatten(style),
      ]}
      {...rest}>
      {String(children)}
    </Text>
  );
}
