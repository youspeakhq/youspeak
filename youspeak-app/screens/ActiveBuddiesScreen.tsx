import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import BuddyCard from '../components/lesson/BuddyCard';
import type { RootStackParamList } from '../navigation/AppNavigator';

type ActiveBuddiesScreenProps = NativeStackScreenProps<RootStackParamList, 'ActiveBuddies'>;

const buddies = [
  { id: 1, name: 'Chiamaka', level: 'Beginner' },
  { id: 2, name: 'Michael', level: 'Advanced' },
  { id: 3, name: 'Grace', level: 'Intermediate' },
  { id: 4, name: 'Emeka', level: 'Beginner' },
  { id: 5, name: 'Jim', level: 'Advanced' },
  { id: 6, name: 'Feyi', level: 'Intermediate' },
  { id: 7, name: 'Laura', level: 'Advanced' },
  { id: 8, name: 'Chiamaka', level: 'Beginner' },
];

const ActiveBuddiesScreen = ({ navigation }: ActiveBuddiesScreenProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center px-6 pt-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="mr-4 h-10 w-10 items-center justify-center"
            >
              <Text className="text-2xl text-slate-900">←</Text>
            </TouchableOpacity>
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Active Buddies</Text>
          </View>

          {/* Search Bar */}
          <View className="mb-6 px-6">
            <View className="flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Text className="text-xl text-slate-400">🔍</Text>
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search for a buddy..."
                placeholderTextColor="#94A3B8"
                className="flex-1 text-base font-spaceGrotesk text-slate-900"
              />
            </View>
          </View>

          {/* Buddies Grid */}
          <ScrollView bounces={false} className="flex-1 px-6">
            <View className="flex-row flex-wrap gap-3 pb-6">
              {buddies
                .filter((buddy) => buddy.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((buddy) => (
                  <BuddyCard key={buddy.id} name={buddy.name} level={buddy.level} onPress={() => {}} />
                ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ActiveBuddiesScreen;

