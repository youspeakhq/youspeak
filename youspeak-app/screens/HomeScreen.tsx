import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import type { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = [true, true, true, false, false, false, false];

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="px-6 pb-8 pt-6">
            {/* Header */}
            <View className="mb-6 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="h-14 w-14 items-center justify-center rounded-full bg-orange-200">
                  <Text className="text-2xl">👤</Text>
                </View>
                <View>
                  <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">Hi Benedicta,</Text>
                  <Text className="text-sm font-spaceGrotesk text-slate-500">B1 - Intermediate</Text>
                </View>
              </View>
              <View className="flex-row gap-2">
                <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <Text className="text-xl">🔔</Text>
                </View>
                <View className="flex-row">
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-orange-300">
                    <Text className="text-xl">👤</Text>
                  </View>
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* AI Lesson Ready Banner */}
            <View className="mb-6 rounded-2xl bg-purple-50 p-4">
              <Text className="text-sm font-spaceGrotesk text-slate-700">
                🎯 You're officially in! Your AI lesson is ready when you are.
              </Text>
            </View>

            {/* Wallet Card */}
            <View className="mb-6 rounded-3xl bg-[#3B5998] p-6" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 6 }}>
              <View className="mb-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Text className="text-xl">💰</Text>
                  </View>
                  <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
                    <Text className="text-xs font-bold text-white">A</Text>
                  </View>
                  <Text className="text-lg font-spaceGrotesk font-semibold text-white">Wallet</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Wallet')}>
                  <View className="rounded-full bg-white/20 px-4 py-2">
                    <Text className="text-sm font-spaceGrotesk font-medium text-white">View history</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text className="text-3xl font-spaceGrotesk font-bold text-white">0 SPKs Balance</Text>
              <View className="absolute right-6 top-6">
                <Text className="text-4xl">💎</Text>
              </View>
            </View>

            {/* Streak Card */}
            <View className="mb-6 rounded-3xl border border-slate-200 bg-white p-6" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}>
              <View className="mb-4 flex-row items-center gap-2">
                <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">1 day Streak</Text>
                <Text className="text-2xl">🔥</Text>
              </View>
              <View className="flex-row justify-between">
                {weekDays.map((day, index) => (
                  <View key={index} className="items-center gap-2">
                    <Text className="text-xs font-spaceGrotesk text-slate-500">{day}</Text>
                    <View className={`h-8 w-8 items-center justify-center rounded ${completedDays[index] ? 'bg-green-500' : 'bg-slate-100'}`}>
                      {completedDays[index] ? (
                        <Text className="text-white">✓</Text>
                      ) : (
                        <Text className="text-xs text-slate-400">{9 + index}</Text>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Speaking Rooms */}
            <View className="mb-4">
              <Text className="mb-4 text-xl font-spaceGrotesk font-bold text-slate-900">
                Explore Speaking Rooms
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => navigation.navigate('AISpeaXDetail')}
                  className="mr-4 w-64 rounded-3xl bg-blue-100 p-6"
                  style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}
                >
                  <Text className="mb-2 text-3xl">🤖</Text>
                  <Text className="mb-1 text-lg font-spaceGrotesk font-bold text-slate-900">AI SpeaX</Text>
                  <Text className="text-sm font-spaceGrotesk text-slate-600">Unlimited AI lessons for free</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  className="w-64 rounded-3xl bg-green-100 p-6"
                  style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}
                >
                  <Text className="mb-2 text-3xl">👥</Text>
                  <Text className="mb-1 text-lg font-spaceGrotesk font-bold text-slate-900">Buddy SpeaX</Text>
                  <Text className="text-sm font-spaceGrotesk text-slate-600">Practice with p friends</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

            {/* Bottom Nav */}
            <View className="mt-8 flex-row items-center justify-around rounded-full bg-slate-100 py-3">
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Text className="text-2xl">🏠</Text>
                </View>
                <Text className="text-xs font-spaceGrotesk font-medium text-[#4C1D95]">Home</Text>
              </TouchableOpacity>
              
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1" onPress={() => navigation.navigate('SpeakingRooms')}>
                <Text className="text-2xl">🗣️</Text>
                <Text className="text-xs font-spaceGrotesk text-slate-500">Rooms</Text>
              </TouchableOpacity>
              
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1">
                <Text className="text-2xl">🏆</Text>
                <Text className="text-xs font-spaceGrotesk text-slate-500">Rankings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1">
                <Text className="text-2xl">🤖</Text>
                <Text className="text-xs font-spaceGrotesk text-slate-500">AI Guide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
