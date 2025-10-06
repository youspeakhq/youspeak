import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import BuddyCard from '../components/lesson/BuddyCard';
import ParticipantItem from '../components/lesson/ParticipantItem';
import type { RootStackParamList } from '../navigation/AppNavigator';

type WaitingRoomScreenProps = NativeStackScreenProps<RootStackParamList, 'WaitingRoom'>;

const participants = [
  { id: 1, name: 'Jane', level: 'B1-Intermediate' },
  { id: 2, name: 'Michael', level: 'C1-Advanced' },
  { id: 3, name: 'Grace', level: 'AI-Beginners' },
  { id: 4, name: 'Adedayo', level: 'B2-Higher Intermediate' },
  { id: 5, name: 'You', level: 'A2-Higher Beginners', isYou: true },
];

const buddies = [
  { id: 1, name: 'Chiamaka', level: 'Beginner' },
  { id: 2, name: 'Michael', level: 'Advanced' },
  { id: 3, name: 'Grace', level: 'Intermediate' },
  { id: 4, name: 'Emeka', level: 'Beginner' },
  { id: 5, name: 'Jim', level: 'Advanced' },
  { id: 6, name: 'Feyi', level: 'Intermediate' },
  { id: 7, name: 'Laura', level: 'Advanced' },
  { id: 8, name: 'Chiamaka', level: 'Beginner' },
];

const WaitingRoomScreen = ({ navigation, route }: WaitingRoomScreenProps): JSX.Element => {
  const [countdown, setCountdown] = useState(155); // 2:35 in seconds
  const showParticipantsList = route.params?.showList;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const handleEnterRoom = () => {
    navigation.navigate('ActiveRoom', { roomId: route.params?.roomId });
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center justify-between px-6 pt-6">
            <View className="flex-row items-center gap-3">
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <Text className="text-2xl text-slate-900">←</Text>
              </TouchableOpacity>
              <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Waiting Room</Text>
            </View>
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#4C1D95]">
              <Text className="text-xs font-bold text-white">A</Text>
            </View>
          </View>

          <ScrollView bounces={false} className="flex-1">
            <View className="px-6">
              <Text className="mb-6 text-center text-base font-spaceGrotesk text-slate-500">
                Room starting soon. Get ready!
              </Text>

              {showParticipantsList ? (
                <>
                  {/* Timer and Instructions */}
                  <View className="mb-6 items-center rounded-3xl border border-purple-200 bg-purple-50 p-6">
                    <Text className="mb-2 text-4xl">⏱️</Text>
                    <Text className="mb-1 text-xl font-spaceGrotesk font-bold text-slate-900">
                      Starts in {minutes}:{seconds.toString().padStart(2, '0')}
                    </Text>
                    <Text className="text-sm font-spaceGrotesk text-slate-600">
                      Use this time to test your mic and say hi!
                    </Text>
                  </View>

                  {/* Participants List */}
                  <View className="mb-6">
                    <Text className="mb-4 text-lg font-spaceGrotesk font-bold text-slate-900">
                      Participants (5/20)
                    </Text>
                    {participants.map((participant) => (
                      <ParticipantItem
                        key={participant.id}
                        name={participant.name}
                        level={participant.level}
                        isYou={participant.isYou}
                      />
                    ))}
                  </View>

                  {/* Community Guidelines */}
                  <View className="mb-6">
                    <Text className="mb-3 text-lg font-spaceGrotesk font-bold text-slate-900">
                      Community Guidelines
                    </Text>
                    <View className="gap-2">
                      <Text className="text-sm font-spaceGrotesk text-slate-500">
                        • Be respectful and supportive.
                      </Text>
                      <Text className="text-sm font-spaceGrotesk text-slate-500">• Take turns speaking.</Text>
                      <Text className="text-sm font-spaceGrotesk text-slate-500">
                        • Stay on topic (Paris Tour Chat).
                      </Text>
                    </View>
                  </View>
                </>
              ) : (
                // Buddy Grid View
                <View className="mb-6 flex-row flex-wrap gap-3">
                  {buddies.map((buddy) => (
                    <BuddyCard key={buddy.id} name={buddy.name} level={buddy.level} />
                  ))}
                </View>
              )}

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleEnterRoom}
                className="mb-6 w-full rounded-full bg-[#4C1D95] py-4"
              >
                <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">
                  {showParticipantsList ? 'Enter Room' : 'Continue'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WaitingRoomScreen;

