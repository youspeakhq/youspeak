import type { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type BuddyCardProps = {
  name: string;
  level: string;
  imageUrl?: string;
  isOnline?: boolean;
  onPress?: () => void;
};

const BuddyCard = ({ name, level, imageUrl, isOnline = true, onPress }: BuddyCardProps): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="w-[48%] items-center rounded-3xl border border-slate-200 bg-white p-5"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="relative mb-3">
        <View className="h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-slate-200">
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} className="h-full w-full" />
          ) : (
            <Text className="text-4xl">👤</Text>
          )}
        </View>
        {isOnline && (
          <View className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white bg-green-500" />
        )}
      </View>
      <Text className="text-center text-base font-spaceGrotesk font-semibold text-slate-900">{name}</Text>
      <Text className="text-center text-sm font-spaceGrotesk text-slate-500">{level}</Text>
    </TouchableOpacity>
  );
};

export default BuddyCard;

