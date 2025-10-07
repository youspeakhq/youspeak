import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import type { JSX } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

type VerifyAccountScreenProps = NativeStackScreenProps<RootStackParamList, 'VerifyAccount'>;

const VerifyAccountScreen = ({ navigation, route }: VerifyAccountScreenProps): JSX.Element => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // TODO: Implement Cognito verification
    navigation.navigate('ProfileSetup');
  };

  const handleResendCode = () => {
    // TODO: Implement resend code
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          <View className="mb-12 gap-2">
            <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">Verify Your Account</Text>
            <Text className="text-base font-spaceGrotesk text-slate-500">
              Enter the 6-digit code sent to your Email
            </Text>
          </View>

          <View className="gap-8">
            <View className="flex-row justify-between gap-3">
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref: TextInput | null) => {
                    inputRefs.current[index] = ref;
                  }}
                  value={digit}
                  onChangeText={(text: string) => handleChangeText(text, index)}
                  onKeyPress={(e: any) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  className="h-16 flex-1 rounded-2xl border-2 border-slate-200 bg-slate-50 text-center text-2xl font-spaceGrotesk font-semibold text-slate-900"
                  style={{ textAlign: 'center' }}
                />
              ))}
            </View>

            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-sm font-spaceGrotesk text-slate-500">Didn't get a code?</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={handleResendCode}>
                <Text className="text-sm font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-auto gap-4">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleVerify}
              className="w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Verify</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-sm font-spaceGrotesk text-slate-500">Already have an account?</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                <Text className="text-sm font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default VerifyAccountScreen;
