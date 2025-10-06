import type { JSX } from 'react';
import { Image, Text, View } from 'react-native';

type ParticipantItemProps = {
  name: string;
  level: string;
  imageUrl?: string;
  isYou?: boolean;
};

const ParticipantItem = ({ name, level, imageUrl, isYou = false }: ParticipantItemProps): JSX.Element => {
  return (
    <View className="mb-3 flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
      <View className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} className="h-full w-full" />
        ) : (
          <View className="h-full w-full items-center justify-center">
            <Text className="text-xl">👤</Text>
          </View>
        )}
      </View>
      <View className="flex-1">
        <Text className="text-base font-spaceGrotesk font-semibold text-slate-900">
          {name} {isYou && '– '}
          <Text className="font-normal text-slate-600">{level}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ParticipantItem;

