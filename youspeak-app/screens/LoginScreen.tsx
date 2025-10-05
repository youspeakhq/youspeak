import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import YouSpeakIcon from '../assets/icons/purple-you-speak-icon.svg';
import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 24,
  elevation: 8,
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <View className="items-center gap-10">
              <View className="items-center">
                <View className="h-24 w-24 items-center justify-center rounded-3xl border border-white/60 bg-white" style={cardShadowStyle}>
                  <YouSpeakIcon width={72} height={72} />
                </View>
                <View className="mt-6 items-center gap-2">
                  <Text className="text-2xl font-spaceGrotesk font-semibold text-slate-900">Welcome back 👋</Text>
                  <Text className="text-base font-spaceGrotesk text-slate-500">
                    Ready to keep speaking smarter?
                  </Text>
                </View>
              </View>

              <View className="w-full gap-6 rounded-3xl border border-white/80 bg-white px-6 py-8" style={cardShadowStyle}>
                <View className="gap-5">
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

                  <View className="gap-2">
                    <Text className="text-sm font-spaceGrotesk font-medium text-slate-600">Password</Text>
                    <TextInput
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Password"
                      secureTextEntry
                      autoCapitalize="none"
                      placeholderTextColor="#94A3B8"
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-spaceGrotesk text-slate-900"
                    />
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('ForgotPassword')}
                    className="self-end"
                  >
                    <Text className="text-sm font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.85}
                  className="w-full rounded-full bg-[#4C1D95] py-4"
                >
                  <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Log In</Text>
                </TouchableOpacity>

                <View className="flex-row items-center justify-center gap-3">
                  <View className="h-px flex-1 bg-slate-200" />
                  <Text className="text-sm font-spaceGrotesk text-slate-400">or continue with</Text>
                  <View className="h-px flex-1 bg-slate-200" />
                </View>

                <View className="flex-row gap-3">
                  <TouchableOpacity
                    activeOpacity={0.85}
                    className="flex-1 flex-row items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-3"
                  >
                    <Text className="text-base font-spaceGrotesk font-semibold text-slate-700">Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    className="flex-1 flex-row items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-3"
                  >
                    <Text className="text-base font-spaceGrotesk font-semibold text-slate-700">Apple</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-base font-spaceGrotesk text-slate-500">Don&apos;t have an account?</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
                <Text className="text-base font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
