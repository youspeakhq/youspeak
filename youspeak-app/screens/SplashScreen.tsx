import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import type { JSX } from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import SmileArcIcon from '../components/icons/SmileArcIcon';
import type { RootStackParamList } from '../navigation/AppNavigator';

const gradientColors = ['#2F0B65', '#0A5FCF'];

const wordmarkTextClassName =
  'text-white text-6xl font-spaceGrotesk font-semibold tracking-[8px] uppercase';

const speechBubbleClassName =
  'h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/10';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: SplashScreenProps): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Welcome');
    }, 1600);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <LinearGradient colors={gradientColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className="flex-1">
      <SafeAreaView className="flex-1">
        <StatusBar style="light" />
        <View className="flex-1 items-center justify-center gap-16">
          <View className="items-center gap-6">
            <View className="flex-row items-center gap-4">
              <Text className={wordmarkTextClassName}>Y</Text>
              <View className={speechBubbleClassName}>
                <View className="h-8 w-8 rounded-full border-2 border-white bg-white/85" />
                <View className="mt-1 h-1.5 w-6 rounded-full bg-white/85" />
              </View>
              <Text className={wordmarkTextClassName}>U</Text>
            </View>
            <Text className="text-white text-6xl font-spaceGrotesk font-semibold tracking-[6px]">
              Speak
            </Text>
            <SmileArcIcon width={180} color="#FFFFFF" />
          </View>

          <View className="items-center gap-3 px-12">
            <Text className="text-center text-lg font-spaceGrotesk font-medium uppercase tracking-[4px] text-white/80">
              Learn. Speak. Live.
            </Text>
            <Text className="text-center text-base font-spaceGrotesk text-white/70">
              Your everyday speaking companion built to boost confidence and fluency.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplashScreen;
