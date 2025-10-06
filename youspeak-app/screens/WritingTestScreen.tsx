import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type WritingTestScreenProps = NativeStackScreenProps<RootStackParamList, 'WritingTest'>;

const WritingTestScreen = ({ navigation }: WritingTestScreenProps): JSX.Element => {
  const [text, setText] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    // TODO: Play audio using AWS Polly
    setHasPlayed(true);
  };

  const handleNext = () => {
    navigation.navigate('FluencyTest');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          {/* Progress bar */}
          <View className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <View className="h-full w-3/4 rounded-full bg-[#4C1D95]" />
          </View>

          <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Writing Test</Text>
            <Text className="text-base font-spaceGrotesk text-slate-500">3 of 4</Text>
          </View>

          <Text className="mb-8 text-base font-spaceGrotesk text-slate-500">
            Tap to listen. Then type what you hear.
          </Text>

          <View className="mb-8 rounded-3xl border border-slate-200 bg-white p-6" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Type in Korean here..."
              placeholderTextColor="#CBD5E1"
              multiline
              className="mb-4 min-h-[60px] text-base font-spaceGrotesk text-slate-900"
            />

            <View className="h-px bg-slate-200" />

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handlePlay}
              className="mt-4 flex-row items-center gap-3"
            >
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#3B5998]">
                <Text className="text-xl text-white">▶</Text>
              </View>
              <Text className="text-sm font-spaceGrotesk text-slate-400">I study Korean every day.</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-auto gap-4">
            <View className="items-end">
              <View className="h-20 w-20 items-center justify-center rounded-full bg-[#4C1D95]" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 12, elevation: 6 }}>
                <Text className="text-3xl text-white">🎤</Text>
              </View>
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

export default WritingTestScreen;

