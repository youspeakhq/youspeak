import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import WelcomeIllustration from '../assets/illustrations/welcome-screen.svg';
import type { RootStackParamList } from '../navigation/AppNavigator';

const dotClassName = 'h-2.5 w-2.5 rounded-full';
const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.08,
  shadowRadius: 20,
  elevation: 6,
};

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps): JSX.Element => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 px-6">
        <StatusBar style="dark" />
        <View className="flex-1 justify-center gap-12 py-10">
          <View className="items-center rounded-3xl border border-slate-100 bg-white px-6 py-12" style={cardShadowStyle}>
            <View className="h-48 w-full items-center justify-center">
              <WelcomeIllustration width="100%" height="100%" />
            </View>

            <View className="mt-8 items-center gap-3">
              <Text className="text-center text-2xl font-spaceGrotesk font-semibold text-slate-900">
                Speak with confidence
              </Text>
              <Text className="text-center text-base font-spaceGrotesk text-slate-500">
                Practice conversations daily and improve naturally.
              </Text>
            </View>

            <View className="mt-8 flex-row items-center justify-center gap-2">
              <View className={`${dotClassName} bg-slate-200`} />
              <View className={dotClassName} style={{ backgroundColor: primaryColor }} />
              <View className={`${dotClassName} bg-slate-200`} />
            </View>
          </View>

          <View className="gap-6">
            <TouchableOpacity
              activeOpacity={0.85}
              className="rounded-full bg-[#4C1D95] py-4"
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Get Started</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center gap-2">
              <Text className="text-base font-spaceGrotesk text-slate-500">Already have an account?</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                <Text className="text-base font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
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

export default WelcomeScreen;
