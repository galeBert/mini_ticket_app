import {TextInputProps, TouchableOpacityProps} from 'react-native';

declare interface Post {
  id: string;
  title: string;
  date: string;
  image: any;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: 'primary' | 'outline';
  textVariant?: 'sm' | 'base' | 'lg';
  Icon?: React.ComponentType<any>;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label?: string;
  rightIcon?: React.ComponentType<any>;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  errorMessage?: string;
}
