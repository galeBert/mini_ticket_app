import {
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {icons} from '../constant';
import {InputFieldProps} from '../types/type';
import InterText from './inter-text';

const InputField = ({
  label,
  rightIcon: Icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  errorMessage,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full space-y-[6px] flex flex-col">
          <View
            className={`flex flex-row justify-start items-center px-5 relative bg-neutral-100 rounded-full border border-neutral-200 focus:border-neutral-600`}>
            <TextInput
              className={`rounded-full text-[15px] flex-1 text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
            {Icon && <Icon />}
          </View>
          {errorMessage && (
            <View className="flex flex-row items-center space-x-1">
              <Image
                className="w-[16px] h-[22px]"
                source={icons.alertCircle}
                resizeMode="contain"
              />
              <InterText className="text-sm text-red-100">
                {errorMessage}
              </InterText>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
