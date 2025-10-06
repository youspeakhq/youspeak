import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

type PersonalizeProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'PersonalizeProfile'>;

const PersonalizeProfileScreen = ({ navigation }: PersonalizeProfileScreenProps): JSX.Element => {
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [learningGoal, setLearningGoal] = useState('');

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);

  const handleContinue = () => {
    navigation.navigate('LanguageSelection');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="flex-1 px-6 pb-8 pt-6">
            <View className="mb-12 gap-2">
              <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">Personalize Your Profile</Text>
              <Text className="text-base font-spaceGrotesk text-slate-500">Help us tailor You Speak to you.</Text>
            </View>

            <View className="gap-5">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setShowCountryDropdown(!showCountryDropdown)}
                className="relative flex-row items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <Text className={`text-base font-spaceGrotesk ${country ? 'text-slate-900' : 'text-slate-400'}`}>
                  {country || 'Select your country'}
                </Text>
                <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                  <Text className="text-lg font-bold text-white">A</Text>
                </View>
              </TouchableOpacity>

              <View className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <Text className="text-base font-spaceGrotesk text-slate-400">Enter your age</Text>
                <View className="absolute right-4 top-3 h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                  <Text className="text-lg font-bold text-white">A</Text>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setShowGenderDropdown(!showGenderDropdown)}
                className="relative flex-row items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <Text className={`text-base font-spaceGrotesk ${gender ? 'text-slate-900' : 'text-slate-400'}`}>
                  {gender || 'Select your gender'}
                </Text>
                <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                  <Text className="text-lg font-bold text-white">A</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setShowGoalDropdown(!showGoalDropdown)}
                className="relative flex-row items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <Text className={`text-base font-spaceGrotesk ${learningGoal ? 'text-slate-900' : 'text-slate-400'}`}>
                  {learningGoal || 'Select your learning goal'}
                </Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg">🎯</Text>
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-lg font-bold text-white">A</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-auto pt-8">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleContinue}
                className="w-full rounded-full bg-[#4C1D95] py-4"
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

export default PersonalizeProfileScreen;

