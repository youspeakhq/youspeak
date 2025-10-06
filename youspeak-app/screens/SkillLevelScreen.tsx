import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 12,
  elevation: 4,
};

const skillLevels = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: "I'm just starting out with this language.",
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    description: 'I can handle basics but need practice.',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: "I'm confident, aiming for fluency.",
  },
];

type SkillLevelScreenProps = NativeStackScreenProps<RootStackParamList, 'SkillLevel'>;

const SkillLevelScreen = ({ navigation }: SkillLevelScreenProps): JSX.Element => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleContinue = () => {
    // Navigate to diagnostic check instead of plan selection
    navigation.navigate('DiagnosticCheck');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="flex-1 px-6 pb-8 pt-6">
            <View className="mb-12 gap-2">
              <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">What's your current level?</Text>
              <Text className="text-base font-spaceGrotesk text-slate-500">
                We'll adjust lessons to match your skill level.
              </Text>
            </View>

            <View className="gap-5">
              {skillLevels.map((level) => (
                <TouchableOpacity
                  key={level.id}
                  activeOpacity={0.85}
                  onPress={() => setSelectedLevel(level.id)}
                  className={`gap-2 rounded-3xl border bg-white p-6 ${
                    selectedLevel === level.id ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200'
                  }`}
                  style={cardShadowStyle}
                >
                  <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">{level.title}</Text>
                  <Text className="text-base font-spaceGrotesk text-slate-500">{level.description}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="mt-auto pt-12">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleContinue}
                disabled={!selectedLevel}
                className={`w-full rounded-full py-4 ${selectedLevel ? 'bg-[#4C1D95]' : 'bg-slate-300'}`}
              >
                <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SkillLevelScreen;

