import {View, ViewProps, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface CustomHeaderProps extends ViewProps {
  children: ReactNode;
}
export default function CustomHeader({
  children,
  style,
  className,
  ...rest
}: CustomHeaderProps) {
  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          // Shadow properties
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.16,
          shadowRadius: 8,
          elevation: 10,
          justifyContent: 'flex-start',
        },
        style && StyleSheet.flatten(style),
      ]}
      className={`px-5 space-x-3 pt-3 pb-5 ${className}`}
      {...rest}>
      {children}
    </View>
  );
}
