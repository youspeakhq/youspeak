import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import type { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import SmileIcon from '../components/icons/SmileIcon';
import type { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  return (
    <LinearGradient
      colors={['#2F0B65', '#0A5FCF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-8">
        <StatusBar style="light" />
        <View className="flex-1 justify-between py-16">
          <View className="items-center gap-12">
            <View className="flex-row items-center justify-center gap-6">
              {[0, 1, 2].map((index) => (
                <View
                  key={index}
                  className="h-20 w-20 items-center justify-center rounded-full border-2 border-[#FACC15] bg-white/10"
                >
                  <SmileIcon size={52} color="#FACC15" />
                </View>
              ))}
            </View>

            <View className="items-center gap-4 px-6">
              <Text className="text-center text-3xl font-spaceGrotesk font-semibold text-white">
                Learn It. Speak It. Live It.
              </Text>
              <Text className="text-center text-base font-spaceGrotesk text-white/80">
                Develop real-world speaking confidence with guided practice every day.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            className="w-full rounded-full bg-white py-4"
            onPress={() => navigation.navigate('Learn')}
          >
            <Text className="text-center text-lg font-spaceGrotesk font-semibold text-[#2F0B65]">
              Start Learning
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
