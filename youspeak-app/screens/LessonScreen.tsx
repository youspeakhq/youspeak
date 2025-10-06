import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import AudioCard from '../components/lesson/AudioCard';
import type { RootStackParamList } from '../navigation/AppNavigator';

type LessonScreenProps = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const LessonScreen = ({ navigation, route }: LessonScreenProps): JSX.Element => {
  const { topicId, lessonNumber, totalLessons } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const handlePlay = () => {
    // TODO: Play audio using AWS Polly
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleRecord = () => {
    // TODO: Start recording with expo-av
    setIsRecording(!isRecording);
    if (!isRecording) {
      setHasRecorded(true);
    }
  };

  const handleContinue = () => {
    // TODO: Move to next lesson or complete
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          {/* Header */}
          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">
              Lesson {lessonNumber} of {totalLessons}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="h-10 w-10 items-center justify-center"
            >
              <Text className="text-2xl text-slate-900">✕</Text>
            </TouchableOpacity>
          </View>

          {/* Progress bar */}
          <View className="mb-8 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <View 
              className="h-full rounded-full bg-[#4C1D95]" 
              style={{ width: `${(lessonNumber / totalLessons) * 100}%` }}
            />
          </View>

          {/* Audio Card */}
          <AudioCard
            word="Bonjour !"
            pronunciation="bohn-zhoor"
            translation="Hello!"
            onPlay={handlePlay}
            isPlaying={isPlaying}
          />

          {/* Microphone Button */}
          <View className="mt-auto items-end">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleRecord}
              className={`h-20 w-20 items-center justify-center rounded-full ${
                isRecording ? 'bg-red-500' : 'bg-[#4C1D95]'
              }`}
              style={{
                shadowColor: isRecording ? '#EF4444' : '#4C1D95',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 8,
              }}
            >
              <Text className="text-3xl text-white">🎤</Text>
            </TouchableOpacity>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleContinue}
            disabled={!hasRecorded}
            className={`mt-6 w-full rounded-full py-4 ${
              hasRecorded ? 'bg-[#4C1D95]' : 'bg-slate-200'
            }`}
          >
            <Text
              className={`text-center text-lg font-spaceGrotesk font-semibold ${
                hasRecorded ? 'text-white' : 'text-slate-400'
              }`}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LessonScreen;

