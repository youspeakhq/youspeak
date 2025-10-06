import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import BuddyCard from '../components/lesson/BuddyCard';
import RoomCard from '../components/lesson/RoomCard';
import type { RootStackParamList } from '../navigation/AppNavigator';

type BuddySpeaXScreenProps = NativeStackScreenProps<RootStackParamList, 'BuddySpeaX'>;

const activeBuddies = [
  { id: 1, name: 'Chiamaka', level: 'Beginner' },
  { id: 2, name: 'Michael', level: 'Advanced' },
];

const availableRooms = [
  {
    id: 1,
    hostName: 'Maria',
    hostCountry: 'Spain',
    roomTitle: 'Korean Greetings',
    participants: '1/2',
    isFree: true,
  },
  {
    id: 2,
    hostName: 'Adedayo',
    hostCountry: 'Nigeria',
    roomTitle: 'Korean Greetings',
    participants: '1/2',
    isFree: false,
    price: 2,
  },
];

const BuddySpeaXScreen = ({ navigation }: BuddySpeaXScreenProps): JSX.Element => {
  const handleCreateRoom = () => {
    navigation.navigate('CreateRoom', { roomType: 'buddy' });
  };

  const handleSeeAllBuddies = () => {
    navigation.navigate('ActiveBuddies');
  };

  const handleJoinRoom = (roomId: number) => {
    navigation.navigate('WaitingRoom', { roomId });
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
              <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Buddy SpeaX</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-base font-spaceGrotesk font-medium text-[#4C1D95]">Rules</Text>
            </TouchableOpacity>
          </View>

          <ScrollView bounces={false} className="flex-1">
            <View className="px-6">
              {/* Create Room Card */}
              <View
                className="mb-6 rounded-3xl border border-slate-200 bg-white p-6"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Text className="mb-1 text-xl font-spaceGrotesk font-bold text-slate-900">
                  Find a speaking partner
                </Text>
                <Text className="mb-4 text-base font-spaceGrotesk text-slate-500">
                  Practice real conversation with peers
                </Text>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={handleCreateRoom}
                  className="w-full rounded-full bg-[#4C1D95] py-4"
                >
                  <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">
                    Create a Room
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Active Buddies */}
              <View className="mb-6">
                <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">Active Buddies</Text>
                  <TouchableOpacity activeOpacity={0.7} onPress={handleSeeAllBuddies}>
                    <Text className="text-base font-spaceGrotesk font-medium text-[#4C1D95]">See All</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row flex-wrap gap-3">
                  {activeBuddies.map((buddy) => (
                    <BuddyCard
                      key={buddy.id}
                      name={buddy.name}
                      level={buddy.level}
                      onPress={() => {}}
                    />
                  ))}
                </View>
              </View>

              {/* Join a Room */}
              <View className="mb-6">
                <Text className="mb-4 text-xl font-spaceGrotesk font-bold text-slate-900">Join a Room</Text>

                {availableRooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    hostName={room.hostName}
                    hostCountry={room.hostCountry}
                    roomTitle={room.roomTitle}
                    participants={room.participants}
                    isFree={room.isFree}
                    price={room.price}
                    onJoin={() => handleJoinRoom(room.id)}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BuddySpeaXScreen;

