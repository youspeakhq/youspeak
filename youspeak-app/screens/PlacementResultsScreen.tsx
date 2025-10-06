import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type PlacementResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'PlacementResults'>;

const levelData = {
  beginner: {
    title: 'Beginner Level',
    badge: '🥉',
    message: "Don't worry — starting here ensures you build a strong foundation.",
    alternateMessage: 'We recommend starting at.......',
    emoji: '🌱',
  },
  intermediate: {
    title: 'B1-Intermediate Level',
    badge: '🥈',
    message: "Great! You're right where you belong. Let's keep building your skills.",
    alternateMessage: 'Great! Your skills match Intermediate.',
    emoji: '🎉',
  },
  advanced: {
    title: 'Advanced Level',
    badge: '🥇',
    message: "You're ready for more advanced lessons. Let's keep the momentum going.",
    alternateMessage: 'Impressive! You tested into Advanced.',
    emoji: '🚀',
  },
};

const PlacementResultsScreen = ({ navigation, route }: PlacementResultsScreenProps): JSX.Element => {
  const level = route.params?.level || 'intermediate';
  const scores = route.params?.scores || { listening: 50, reading: 35, writing: 30, speaking: 35 };
  
  const levelInfo = levelData[level as keyof typeof levelData];

  const handleContinue = () => {
    navigation.navigate('WelcomeLevel', { level });
  };

  const handleAlternateLevel = () => {
    // Allow user to choose different level
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="flex-1 px-6 pb-8 pt-6">
            <View className="mb-8 gap-2">
              <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Your Placement Results</Text>
              <Text className="text-base font-spaceGrotesk text-slate-500">
                Here's how you performed across the skills we tested.
              </Text>
            </View>

            {/* Skill scores card */}
            <View className="mb-8 rounded-3xl border border-slate-200 bg-white p-6" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}>
              {Object.entries(scores).map(([skill, score]) => (
                <View key={skill} className="mb-5 last:mb-0">
                  <View className="mb-2 flex-row items-center justify-between">
                    <Text className="text-base font-spaceGrotesk font-semibold capitalize text-slate-900">
                      {skill}
                    </Text>
                    {skill === 'listening' && (
                      <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                        <Text className="text-xs font-bold text-white">A</Text>
                      </View>
                    )}
                    <Text className="text-base font-spaceGrotesk font-semibold text-slate-600">{score}%</Text>
                  </View>
                  <View className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <View 
                      className="h-full rounded-full bg-gradient-to-r from-[#4C1D95] to-[#3B5998]" 
                      style={{ width: `${score}%`, backgroundColor: '#4C1D95' }}
                    />
                  </View>
                </View>
              ))}
            </View>

            {/* Level badge */}
            <View className="mb-6 items-center gap-4">
              <Text className="text-center text-base font-spaceGrotesk text-slate-600">
                {levelInfo.alternateMessage}
              </Text>
              
              <View className="items-center gap-3">
                <View className="items-center gap-2">
                  <Text className="text-5xl">{levelInfo.badge}</Text>
                  <Text className="text-4xl">⭐</Text>
                </View>
                <View className="items-center gap-2 rounded-full bg-[#1E3A8A] px-6 py-3">
                  <Text className="text-center text-base font-spaceGrotesk font-bold text-white">
                    {levelInfo.title}
                  </Text>
                  <View className="absolute -right-2 -top-2 h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                </View>
              </View>

              <Text className="text-center text-sm font-spaceGrotesk text-slate-500">
                {levelInfo.emoji} {levelInfo.message}
              </Text>
            </View>

            {/* Alternate level option */}
            {level !== 'intermediate' && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleAlternateLevel}
                className="mb-6"
              >
                <Text className="text-center text-sm font-spaceGrotesk text-[#3B5998]">
                  Continue with Intermediate instead?
                </Text>
              </TouchableOpacity>
            )}

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

export default PlacementResultsScreen;

