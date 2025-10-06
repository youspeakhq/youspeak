import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type WelcomeLevelScreenProps = NativeStackScreenProps<RootStackParamList, 'WelcomeLevel'>;

const WelcomeLevelScreen = ({ navigation, route }: WelcomeLevelScreenProps): JSX.Element => {
  const level = route.params?.level || 'intermediate';
  const levelDisplay = level === 'intermediate' ? 'B1-Intermediate' : level.charAt(0).toUpperCase() + level.slice(1);

  const handleGoToLessonHub = () => {
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-between px-6 pb-8 pt-12">
          {/* Illustration */}
          <View className="flex-1 items-center justify-center">
            <View className="relative mb-8">
              <View className="h-72 w-72 items-center justify-center rounded-full bg-blue-100">
                <Text className="text-9xl">👩‍🎓</Text>
              </View>
              <View className="absolute right-8 top-8 h-12 w-12 items-center justify-center rounded-full bg-[#4C1D95]">
                <Text className="text-xs font-bold text-white">A</Text>
              </View>
              <View className="absolute left-8 top-20">
                <View className="rounded-2xl bg-blue-200 p-3">
                  <Text className="text-2xl">💬</Text>
                </View>
              </View>
            </View>

            <View className="items-center gap-4">
              <View className="relative">
                <Text className="text-center text-3xl font-spaceGrotesk font-bold text-[#4C1D95]">
                  Welcome to {levelDisplay}!
                </Text>
                <View className="absolute -right-8 -top-2 flex-row gap-1">
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                </View>
              </View>

              <Text className="text-center text-base font-spaceGrotesk text-slate-500">
                We'll build on what you already know and boost your confidence.
              </Text>

              <View className="mt-4 w-full rounded-2xl bg-purple-50 p-4">
                <Text className="text-center text-sm font-spaceGrotesk font-medium text-slate-600">
                  You're on the Free Plan
                </Text>
                <Text className="text-center text-xs font-spaceGrotesk text-slate-500">
                  Upgrade anytime to unlock premium features.
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleGoToLessonHub}
            className="w-full rounded-full bg-[#4C1D95] py-4"
          >
            <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Go to Lesson Hub</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeLevelScreen;

