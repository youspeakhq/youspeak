import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 24,
  elevation: 8,
};

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps): JSX.Element => {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 bg-[#F8F5FF]">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView
          bounces={false}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-between px-6 pb-8 pt-6">
            <View className="gap-10">
              <View className="gap-3">
                <Text className="text-3xl font-spaceGrotesk font-semibold text-slate-900">Forgot your password?</Text>
                <Text className="text-base font-spaceGrotesk text-slate-500">
                  No worries — we&apos;ll help you reset it.
                </Text>
              </View>

              <View className="gap-6 rounded-3xl border border-white/80 bg-white px-6 py-8" style={cardShadowStyle}>
                <View className="gap-2">
                  <Text className="text-sm font-spaceGrotesk font-medium text-slate-600">Email</Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#94A3B8"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-spaceGrotesk text-slate-900"
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.85}
                  className="w-full rounded-full bg-[#4C1D95] py-4"
                >
                  <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Reset Password</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="items-center gap-2">
              <Text className="text-base font-spaceGrotesk text-slate-500">Remembered password?</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                <Text className="text-base font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPasswordScreen;
