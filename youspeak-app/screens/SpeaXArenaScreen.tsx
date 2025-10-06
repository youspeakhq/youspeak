import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import BattleCard from '../components/lesson/BattleCard';
import type { RootStackParamList } from '../navigation/AppNavigator';

type SpeaXArenaScreenProps = NativeStackScreenProps<RootStackParamList, 'SpeaXArena'>;

const ongoingBattles = [
  { id: 1, title: 'Job Interview Challenge', stake: 50, participants: '3/5' },
  { id: 2, title: 'Poetry Slam', stake: 100, participants: '3/5' },
  { id: 3, title: 'Debate Night', stake: 100, participants: '3/5' },
];

const SpeaXArenaScreen = ({ navigation }: SpeaXArenaScreenProps): JSX.Element => {
  const handleJoinBattle = (battleId: number) => {
    navigation.navigate('ChooseScenario');
  };

  const handleViewRankings = () => {
    navigation.navigate('ArenaRankings');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center justify-between px-6 pt-6">
            <View className="flex-row items-center gap-3">
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <Text className="text-2xl text-slate-900">←</Text>
              </TouchableOpacity>
              <View>
                <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">SpeaX Arena</Text>
                <Text className="text-sm font-spaceGrotesk text-slate-500">For advanced level Speakers</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-base font-spaceGrotesk font-medium text-[#4C1D95]">Rules</Text>
            </TouchableOpacity>
          </View>

          <ScrollView bounces={false} className="flex-1">
            <View className="px-6">
              {/* Hero Card */}
              <View
                className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C1D95] to-[#3B5998] p-8"
                style={{
                  shadowColor: '#4C1D95',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 16,
                  elevation: 10,
                  backgroundColor: '#4C1D95',
                }}
              >
                <Text className="mb-4 text-center text-5xl">⚔️</Text>
                <Text className="mb-2 text-center text-2xl font-spaceGrotesk font-bold text-white">
                  Battle with Confidence
                </Text>
                <Text className="text-center text-base font-spaceGrotesk text-white/90">
                  Join a live speaking match.{'\n'}Earn SPKs & climb the leaderboard.
                </Text>
              </View>

              {/* User Profile Card */}
              <View
                className="mb-6 flex-row items-center justify-between rounded-3xl border border-slate-200 bg-white p-5"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <View className="flex-row items-center gap-3">
                  <View className="h-14 w-14 overflow-hidden rounded-full bg-orange-200">
                    <View className="h-full w-full items-center justify-center">
                      <Text className="text-2xl">👤</Text>
                    </View>
                  </View>
                  <View>
                    <Text className="text-lg font-spaceGrotesk font-bold text-slate-900">Hi Bennie!</Text>
                    <Text className="text-sm font-spaceGrotesk text-slate-600">B1-Intermediate</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">300 SPKs</Text>
                  <View className="rounded-full bg-yellow-400 px-3 py-1">
                    <Text className="text-xs font-spaceGrotesk font-semibold text-slate-900">x2 Bonus</Text>
                  </View>
                </View>
              </View>

              {/* Ongoing Battles */}
              <View className="mb-6">
                <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">Ongoing Battles</Text>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text className="text-base font-spaceGrotesk font-medium text-[#4C1D95]">See All</Text>
                  </TouchableOpacity>
                </View>

                {ongoingBattles.map((battle) => (
                  <BattleCard
                    key={battle.id}
                    title={battle.title}
                    stake={battle.stake}
                    participants={battle.participants}
                    onJoin={() => handleJoinBattle(battle.id)}
                  />
                ))}
              </View>

              {/* View Rankings Button */}
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleViewRankings}
                className="mb-6 w-full rounded-full border-2 border-slate-200 bg-white py-4"
              >
                <Text className="text-center text-lg font-spaceGrotesk font-semibold text-slate-700">
                  View Rankings
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SpeaXArenaScreen;

