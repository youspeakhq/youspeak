import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type BattleCardProps = {
  title: string;
  stake: number;
  participants: string;
  onJoin: () => void;
};

const BattleCard = ({ title, stake, participants, onJoin }: BattleCardProps): JSX.Element => {
  return (
    <View
      className="mb-4 flex-row items-center justify-between rounded-3xl border border-slate-200 bg-white p-5"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="flex-1">
        <Text className="mb-2 text-lg font-spaceGrotesk font-semibold text-slate-900">{title}</Text>
        <View className="flex-row items-center gap-4">
          <Text className="text-sm font-spaceGrotesk text-slate-500">Stake: {stake} SPKs</Text>
          <View className="flex-row items-center gap-1">
            <Text className="text-slate-500">👥</Text>
            <Text className="text-sm font-spaceGrotesk text-slate-500">{participants}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onJoin}
        className="rounded-full bg-[#4C1D95] px-6 py-3"
      >
        <Text className="text-center text-sm font-spaceGrotesk font-semibold text-white">Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BattleCard;

