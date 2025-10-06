import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type AISpeaXDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'AISpeaXDetail'>;

const features = [
  {
    icon: '🎧',
    text: 'Learn with audio & chat support.',
  },
  {
    icon: '💬',
    text: 'Practice speaking with instant feedback.',
  },
  {
    icon: '⭐',
    text: 'Earn SPKs as you complete lessons.',
  },
];

const AISpeaXDetailScreen = ({ navigation }: AISpeaXDetailScreenProps): JSX.Element => {
  const handleContinue = () => {
    navigation.navigate('LessonMap');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="px-6 pb-8 pt-6">
            {/* Header */}
            <View className="mb-6 flex-row items-center">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
                className="mr-4 h-10 w-10 items-center justify-center"
              >
                <Text className="text-2xl text-slate-900">←</Text>
              </TouchableOpacity>
              <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">AI SpeaX</Text>
            </View>

            {/* Illustration */}
            <View
              className="mb-8 items-center justify-center rounded-3xl bg-blue-100 p-12"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <View className="items-center">
                <Text className="text-8xl">👩‍💻</Text>
                <Text className="text-6xl">🤖</Text>
                <Text className="text-4xl">💬</Text>
                <Text className="text-4xl">🎵</Text>
              </View>
            </View>

            {/* Features */}
            <View className="mb-8 gap-4">
              {features.map((feature, index) => (
                <View key={index} className="flex-row items-start gap-3">
                  <Text className="text-2xl">{feature.icon}</Text>
                  <Text className="flex-1 text-base font-spaceGrotesk text-slate-700">{feature.text}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleContinue}
              className="w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AISpeaXDetailScreen;

