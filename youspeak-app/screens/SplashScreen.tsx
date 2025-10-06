import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import type { JSX } from 'react';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import splashIcon from '../assets/splash-icon.png';
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
            <Image source={splashIcon} style={{ width: 180, height: 180 }} resizeMode="contain" />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplashScreen;
