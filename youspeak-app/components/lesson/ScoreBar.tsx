import type { JSX } from 'react';
import { Image, Text, View } from 'react-native';

type ScoreBarProps = {
  name: string;
  score: number;
  imageUrl?: string;
  isOnline?: boolean;
};

const ScoreBar = ({ name, score, imageUrl, isOnline = true }: ScoreBarProps): JSX.Element => {
  return (
    <View className="mb-3 flex-row items-center gap-3 rounded-2xl bg-slate-100 p-3">
      <View className="relative">
        <View className="h-12 w-12 overflow-hidden rounded-full bg-slate-300">
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} className="h-full w-full" />
          ) : (
            <View className="h-full w-full items-center justify-center">
              <Text className="text-2xl">👤</Text>
            </View>
          )}
        </View>
        {isOnline && <View className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white bg-green-500" />}
      </View>

      <View className="flex-1">
        <Text className="mb-1 text-base font-spaceGrotesk font-semibold text-slate-900">{name}</Text>
        <View className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <View
            className="h-full rounded-full bg-green-600"
            style={{ width: `${score}%` }}
          />
        </View>
      </View>

      <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">{score}</Text>
    </View>
  );
};

export default ScoreBar;

