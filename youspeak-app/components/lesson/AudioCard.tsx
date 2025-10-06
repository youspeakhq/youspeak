import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type AudioCardProps = {
  word: string;
  pronunciation?: string;
  translation: string;
  onPlay: () => void;
  isPlaying?: boolean;
};

const AudioCard = ({ 
  word, 
  pronunciation, 
  translation, 
  onPlay,
  isPlaying = false 
}: AudioCardProps): JSX.Element => {
  return (
    <View
      className="rounded-3xl border-2 border-blue-300 bg-blue-50 p-6"
      style={{ 
        shadowColor: '#3B82F6', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 8, 
        elevation: 3 
      }}
    >
      <Text className="mb-4 text-center text-sm font-spaceGrotesk font-medium text-slate-600">
        Listen & repeat
      </Text>
      
      <Text className="mb-4 text-center text-4xl font-spaceGrotesk font-bold text-slate-900">
        {word}
      </Text>
      
      {pronunciation && (
        <View className="mb-4 flex-row items-center justify-center gap-3 rounded-2xl bg-white/50 py-3">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPlay}
            className={`h-12 w-12 items-center justify-center rounded-full ${isPlaying ? 'bg-blue-600' : 'bg-[#3B5998]'}`}
          >
            <Text className="text-xl text-white">{isPlaying ? '⏸' : '▶'}</Text>
          </TouchableOpacity>
          <Text className="text-base font-spaceGrotesk font-medium text-slate-600">
            {pronunciation}
          </Text>
        </View>
      )}
      
      <Text className="text-center text-base font-spaceGrotesk text-slate-500">
        {translation}
      </Text>
    </View>
  );
};

export default AudioCard;

