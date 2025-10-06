import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type SpeakingRoomsScreenProps = NativeStackScreenProps<RootStackParamList, 'SpeakingRooms'>;

const rooms = [
  {
    id: 'ai-speax',
    icon: '🤖',
    name: 'AI SpeaX',
    description: 'Unlimited AI lessons for free',
    bgColor: 'bg-blue-100',
    locked: false,
  },
  {
    id: 'buddy-speax',
    icon: '👥',
    name: 'Buddy SpeaX',
    description: 'Practice with peers and friends',
    bgColor: 'bg-green-100',
    locked: false,
  },
  {
    id: 'speax-hive',
    icon: '🏘️',
    name: 'SpeaX Hive',
    description: 'Connect with local communities',
    bgColor: 'bg-yellow-50',
    locked: true,
    price: 2,
  },
  {
    id: 'speax-arena',
    icon: '⚔️',
    name: 'SpeaX Arena',
    description: 'Compete for rewards and recognition',
    bgColor: 'bg-red-50',
    locked: true,
    price: 3,
  },
];

const SpeakingRoomsScreen = ({ navigation }: SpeakingRoomsScreenProps): JSX.Element => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  const handleRoomPress = (room: typeof rooms[0]) => {
    if (room.locked) {
      setSelectedRoom(room);
      setShowUpgradeModal(true);
    } else {
      // Navigate to AI SpeaX Detail
      if (room.id === 'ai-speax') {
        navigation.navigate('AISpeaXDetail');
      }
      // TODO: Add navigation for other rooms
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="px-6 pb-8 pt-6">
            <Text className="mb-8 text-center text-3xl font-spaceGrotesk font-bold text-slate-900">
              Speaking Rooms
            </Text>

            <View className="gap-4">
              {rooms.map((room) => (
                <TouchableOpacity
                  key={room.id}
                  activeOpacity={0.85}
                  onPress={() => handleRoomPress(room)}
                  className={`relative rounded-3xl ${room.bgColor} p-6`}
                  style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 }}
                >
                  {room.locked && (
                    <View className="absolute right-6 top-6">
                      <Text className="text-2xl text-slate-400">🔒</Text>
                    </View>
                  )}
                  <Text className="mb-3 text-4xl">{room.icon}</Text>
                  <Text className="mb-1 text-xl font-spaceGrotesk font-bold text-slate-900">{room.name}</Text>
                  <Text className="text-sm font-spaceGrotesk text-slate-600">{room.description}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Bottom Nav */}
            <View className="mt-8 flex-row items-center justify-around rounded-full bg-slate-100 py-3">
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1" onPress={() => navigation.navigate('Home')}>
                <Text className="text-2xl">🏠</Text>
                <Text className="text-xs font-spaceGrotesk text-slate-500">Home</Text>
              </TouchableOpacity>
              
              <TouchableOpacity activeOpacity={0.7} className="items-center gap-1">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Text className="text-2xl">🗣️</Text>
                </View>
                <Text className="text-xs font-spaceGrotesk font-medium text-[#4C1D95]">Rooms</Text>
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

      {/* Upgrade Modal */}
      <Modal
        visible={showUpgradeModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUpgradeModal(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <View className="w-full rounded-3xl bg-white p-8" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 24, elevation: 12 }}>
            <Text className="mb-4 text-2xl font-spaceGrotesk font-bold text-slate-900">Upgrade to Unlock</Text>
            <Text className="mb-6 text-base font-spaceGrotesk text-slate-600">
              This room is a premium feature. Upgrade your subscription to gain access.
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                setShowUpgradeModal(false);
                navigation.navigate('PlanSelection');
              }}
              className="mb-3 w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Upgrade Now</Text>
            </TouchableOpacity>

            <Text className="mb-3 text-center text-sm font-spaceGrotesk text-slate-500">Or</Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setShowUpgradeModal(false)}
              className="w-full rounded-full border-2 border-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-[#4C1D95]">
                Pay ${selectedRoom?.price} One-Time Access Fee
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowUpgradeModal(false)}
              className="mt-4"
            >
              <Text className="text-center text-sm font-spaceGrotesk text-slate-500">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SpeakingRoomsScreen;

