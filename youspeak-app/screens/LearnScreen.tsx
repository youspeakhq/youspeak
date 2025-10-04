import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import type { JSX } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LearnScreen = (): JSX.Element => {
  return (
    <LinearGradient
      colors={['#1F9DF1', '#4C1D95']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-8">
        <StatusBar style="light" />
        <View className="flex-1 items-center justify-center gap-6">
          <Text className="text-center text-3xl font-spaceGrotesk font-semibold text-white">
            Ready to learn?
          </Text>
          <Text className="text-center text-base font-spaceGrotesk text-white/80">
            This is where your speaking journey begins. We&apos;ll add lessons and
            activities here soon.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LearnScreen;
