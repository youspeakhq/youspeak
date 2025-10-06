import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type LessonCardProps = {
  title: string;
  lessonCount: number;
  duration: string;
  type: string;
  onPress?: () => void;
  showAIBadge?: boolean;
};

const LessonCard = ({ 
  title, 
  lessonCount, 
  duration, 
  type, 
  onPress,
  showAIBadge = false 
}: LessonCardProps): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="relative mb-4 rounded-3xl border border-slate-200 bg-white p-5"
      style={{ 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.05, 
        shadowRadius: 8, 
        elevation: 3 
      }}
    >
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="flex-1 text-lg font-spaceGrotesk font-semibold text-slate-900">{title}</Text>
        {showAIBadge && (
          <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
            <Text className="text-xs font-bold text-white">A</Text>
          </View>
        )}
        <View className="rounded-full bg-purple-100 px-3 py-1">
          <Text className="text-xs font-spaceGrotesk font-semibold text-[#4C1D95]">
            {lessonCount} lessons
          </Text>
        </View>
      </View>
      
      <View className="flex-row items-center gap-4">
        <View className="flex-row items-center gap-2">
          <Text className="text-slate-500">⏰</Text>
          <Text className="text-sm font-spaceGrotesk text-slate-500">{duration}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text className="text-slate-500">🎧</Text>
          <Text className="text-sm font-spaceGrotesk text-slate-500">{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LessonCard;

