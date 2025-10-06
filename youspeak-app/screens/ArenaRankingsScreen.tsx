import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type ArenaRankingsScreenProps = NativeStackScreenProps<RootStackParamList, 'ArenaRankings'>;

const topPlayers = [
  { rank: 1, name: 'Jane Doe', spks: 2567, medal: '🥇' },
  { rank: 2, name: 'Grace Barner', spks: 2000, medal: '🥈' },
  { rank: 3, name: 'Grace Barner', spks: 600, medal: '🥉' },
  ...Array.from({ length: 14 }, (_, i) => ({
    rank: i + 4,
    name: 'Rain Water',
    spks: 200,
    medal: '',
  })),
];

const ArenaRankingsScreen = ({ navigation }: ArenaRankingsScreenProps): JSX.Element => {
  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center justify-between px-6 pt-6">
            <View className="flex-row items-center gap-3">
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <Text className="text-2xl text-white">←</Text>
              </TouchableOpacity>
              <View>
                <Text className="text-2xl font-spaceGrotesk font-bold text-white">SpeaX Arena</Text>
                <Text className="text-sm font-spaceGrotesk text-white/70">
                  Compete. Win. Earn. Stake your SPKs in live battles.
                </Text>
              </View>
            </View>
            <View className="h-10 w-10 items-center justify-center rounded-full bg-[#4C1D95]">
              <Text className="text-xs font-bold text-white">A</Text>
            </View>
          </View>

          {/* Top Players Header */}
          <View className="mb-4 px-6">
            <Text className="text-xl font-spaceGrotesk font-bold text-white">🏆 Top Players</Text>
          </View>

          {/* Rankings List */}
          <ScrollView bounces={false} className="flex-1 px-6">
            {topPlayers.map((player) => (
              <View
                key={player.rank}
                className="mb-3 flex-row items-center justify-between rounded-2xl bg-white p-4"
              >
                <View className="flex-row items-center gap-3">
                  <Text className="w-8 text-lg font-spaceGrotesk font-bold text-slate-900">
                    {player.rank}.
                  </Text>
                  <Text className="text-base font-spaceGrotesk font-semibold text-slate-900">
                    {player.name} - {player.spks} SPKs
                  </Text>
                </View>
                {player.medal && <Text className="text-2xl">{player.medal}</Text>}
              </View>
            ))}
            <View className="h-8" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ArenaRankingsScreen;

