import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type DiagnosticCheckScreenProps = NativeStackScreenProps<RootStackParamList, 'DiagnosticCheck'>;

const DiagnosticCheckScreen = ({ navigation }: DiagnosticCheckScreenProps): JSX.Element => {
  const handleStartTest = () => {
    navigation.navigate('AudioChallenge');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          <View className="mb-8 gap-2">
            <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">Diagnostic Check</Text>
            <Text className="text-base font-spaceGrotesk text-slate-500">A short test to guide your learning.</Text>
          </View>

          <View className="flex-1 items-center justify-center">
            {/* Placeholder for illustration - use actual SVG/image */}
            <View className="h-64 w-64 items-center justify-center rounded-3xl bg-slate-100">
              <Text className="text-6xl">📱</Text>
              <Text className="text-4xl">💬</Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleStartTest}
            className="w-full rounded-full bg-[#4C1D95] py-4"
          >
            <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Start Test</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DiagnosticCheckScreen;

