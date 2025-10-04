import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import type { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import StageRow, { type StageRowProps } from '../components/StageRow';

import LightBulbIcon from '../components/icons/LightBulbIcon';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Stage = StageRowProps;

const stages: Stage[] = [
  { label: 'Learn It.', icons: ['plus'] },
  { label: 'Speak It.', icons: ['plus', 'smile'] },
  { label: 'Live It.', icons: ['plus', 'smile', 'smile'] },
];

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <LinearGradient
      colors={['#4C1D95', '#1F9DF1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-8">
        <StatusBar style="light" />
        <View className="flex-1 items-center justify-center py-12">
          <View className="items-center gap-8 ">
            <View className="items-center gap-2 ">
              <Text className="text-white text-6xl font-spaceGrotesk font-semibold tracking-[6px] uppercase">
                YOU
              </Text>
              <Text className="text-white text-6xl font-spaceGrotesk font-semibold">Speak</Text>
            </View>
            <View className="h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <LightBulbIcon size={42} />
            </View>
            {/* <Image source={require('../assets/splash-icon.png')} /> */}
          </View>

          <View className="items-center gap-6">
            {stages.map((stage) => (
              <StageRow key={stage.label} label={stage.label} icons={stage.icons} />
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full rounded-full border border-white/30 bg-white/15 py-4"
            onPress={() => navigation.navigate('Learn')}
          >
            <Text className="text-center text-lg font-spaceGrotesk font-semibold uppercase tracking-[4px] text-white">
              Start Learning
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
