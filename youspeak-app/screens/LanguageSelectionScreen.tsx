import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

const languages = [
  {
    id: 'english',
    flag: '🇬🇧',
    name: 'English',
    nativeName: 'English',
    description: 'Global business\nlanguage',
    popular: true,
  },
  {
    id: 'spanish',
    flag: '🇪🇸',
    name: 'Spanish',
    nativeName: 'Español',
    description: 'Second-most spoken\nworldwide',
    popular: true,
  },
  {
    id: 'french',
    flag: '🇫🇷',
    name: 'French',
    nativeName: 'Français',
    description: 'Language of culture &\ndiplomacy',
    popular: false,
  },
  {
    id: 'german',
    flag: '🇩🇪',
    name: 'German',
    nativeName: 'Deutsch',
    description: 'European business\nhub language',
    popular: false,
  },
  {
    id: 'japanese',
    flag: '🇯🇵',
    name: 'Japanese',
    nativeName: '日本語 (Nihongo)',
    description: 'Gateway to tech &\ninnovation',
    popular: false,
  },
  {
    id: 'korean',
    flag: '🇰🇷',
    name: 'Korean',
    nativeName: '한국어 (Hangugeo)',
    description: 'Cultural & modern\ninfluence',
    popular: false,
  },
];

type LanguageSelectionScreenProps = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

const LanguageSelectionScreen = ({ navigation }: LanguageSelectionScreenProps): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleContinue = () => {
    navigation.navigate('SkillLevel');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="flex-1 px-6 pb-8 pt-6">
            <View className="mb-8 gap-2">
              <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">Pick a language to learn</Text>
              <Text className="text-base font-spaceGrotesk text-slate-500">You can switch anytime.</Text>
            </View>

            <View className="mb-6 flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Text className="text-xl text-slate-400">🔍</Text>
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search languages"
                placeholderTextColor="#94A3B8"
                className="flex-1 text-base font-spaceGrotesk text-slate-900"
              />
            </View>

            <View className="mb-8 flex-row flex-wrap gap-4">
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.id}
                  activeOpacity={0.85}
                  onPress={() => setSelectedLanguage(language.id)}
                  className={`w-[47%] gap-3 rounded-3xl border bg-white p-5 ${
                    selectedLanguage === language.id ? 'border-[#4C1D95]' : 'border-slate-200'
                  }`}
                  style={cardShadowStyle}
                >
                  {language.popular && (
                    <View className="absolute right-3 top-3 rounded-full bg-purple-100 px-3 py-1">
                      <Text className="text-xs font-spaceGrotesk font-semibold" style={{ color: primaryColor }}>
                        Popular
                      </Text>
                    </View>
                  )}
                  {selectedLanguage === language.id && (
                    <View className="absolute right-3 top-3 h-6 w-6 items-center justify-center rounded-full bg-[#4C1D95]">
                      <Text className="text-xs font-bold text-white">A</Text>
                    </View>
                  )}
                  <Text className="text-5xl">{language.flag}</Text>
                  <View className="gap-1">
                    <Text className="text-lg font-spaceGrotesk font-bold text-slate-900">{language.name}</Text>
                    <Text className="text-sm font-spaceGrotesk text-slate-500">{language.nativeName}</Text>
                    <Text className="text-xs font-spaceGrotesk leading-4 text-slate-400">{language.description}</Text>
                  </View>
                </TouchableOpacity>
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

export default LanguageSelectionScreen;

