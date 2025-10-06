import type { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type RoomCardProps = {
  hostName: string;
  hostImage?: string;
  hostCountry?: string;
  roomTitle: string;
  participants: string;
  isFree: boolean;
  price?: number;
  onJoin: () => void;
};

const RoomCard = ({
  hostName,
  hostImage,
  hostCountry,
  roomTitle,
  participants,
  isFree,
  price,
  onJoin,
}: RoomCardProps): JSX.Element => {
  return (
    <View
      className="mb-4 rounded-3xl border border-slate-200 bg-white p-5"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
            {hostImage ? (
              <Image source={{ uri: hostImage }} className="h-full w-full" />
            ) : (
              <View className="h-full w-full items-center justify-center">
                <Text className="text-2xl">👤</Text>
              </View>
            )}
          </View>
          <View>
            <Text className="text-base font-spaceGrotesk font-semibold text-slate-900">{hostName}</Text>
            {hostCountry && <Text className="text-sm font-spaceGrotesk text-slate-500">• {hostCountry}</Text>}
          </View>
        </View>
        <View className={`rounded-full px-3 py-1 ${isFree ? 'bg-green-100' : 'bg-slate-900'}`}>
          <Text
            className={`text-xs font-spaceGrotesk font-semibold ${isFree ? 'text-green-700' : 'text-white'}`}
          >
            {isFree ? 'Free' : `Paid ($${price})`}
          </Text>
        </View>
      </View>

      <Text className="mb-2 text-lg font-spaceGrotesk font-semibold text-slate-900">{roomTitle}</Text>

      <View className="mb-4 flex-row items-center gap-2">
        <Text className="text-slate-500">👥</Text>
        <Text className="text-sm font-spaceGrotesk text-slate-500">{participants}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onJoin}
        className="w-full rounded-full bg-[#4C1D95] py-3"
      >
        <Text className="text-center text-base font-spaceGrotesk font-semibold text-white">Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;

