import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type ReadingTestScreenProps = NativeStackScreenProps<RootStackParamList, 'ReadingTest'>;

const ReadingTestScreen = ({ navigation }: ReadingTestScreenProps): JSX.Element => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecord = () => {
    // TODO: Start recording with expo-av
    setIsRecording(!isRecording);
  };

  const handleNext = () => {
    navigation.navigate('WritingTest');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          {/* Progress bar */}
          <View className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <View className="h-full w-1/2 rounded-full bg-[#4C1D95]" />
          </View>

          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Reading Test</Text>
            <Text className="text-base font-spaceGrotesk text-slate-500">2 of 4</Text>
          </View>

          <Text className="mb-8 text-base font-spaceGrotesk text-slate-500">
            Tap the mic to record your reading.
          </Text>

          <View className="mb-8 rounded-3xl border border-slate-200 bg-white p-6" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}>
            <Text className="mb-4 text-lg font-spaceGrotesk font-semibold text-slate-900">
              오늘 날씨가 좋아서 저는 공원에서 친구를 만났어요.
            </Text>
            <Text className="text-sm font-spaceGrotesk text-slate-400">
              Today the weather was nice, so I met my friend at the park.
            </Text>
          </View>

          <View className="mt-auto gap-4">
            <View className="items-end">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleRecord}
                className={`h-20 w-20 items-center justify-center rounded-full ${isRecording ? 'bg-red-500' : 'bg-[#4C1D95]'}`}
                style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 12, elevation: 6 }}
              >
                <Text className="text-3xl text-white">🎤</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleNext}
              className="w-full rounded-full bg-slate-200 py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-slate-500">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ReadingTestScreen;

