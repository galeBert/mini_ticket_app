import {Text, StyleSheet} from 'react-native';
import type {TextProps} from 'react-native';
import React from 'react';

interface ComicTextProps extends TextProps {
  children: string | number;
}
export default function ComicText({children, style, ...rest}: ComicTextProps) {
  return (
    <Text
      style={[{fontFamily: 'Comic_Book'}, style && StyleSheet.flatten(style)]}
      {...rest}>
      {String(children)}
    </Text>
  );
}
