import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type CreateRoomScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateRoom'>;

const CreateRoomScreen = ({ navigation, route }: CreateRoomScreenProps): JSX.Element => {
  const roomType = route.params?.roomType || 'buddy';
  const isHive = roomType === 'hive';

  const [roomName, setRoomName] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [maxParticipants, setMaxParticipants] = useState(2);
  const [isPublic, setIsPublic] = useState(true);
  const [isFree, setIsFree] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCreate = () => {
    // TODO: Create room in database
    setShowSuccess(true);
  };

  const handleContinueFromSuccess = () => {
    setShowSuccess(false);
    navigation.navigate('WaitingRoom', { roomId: 1 });
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
          <View className="flex-1 px-6 pb-8 pt-6">
            {/* Header */}
            <View className="mb-6 flex-row items-center">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
                className="mr-4 h-10 w-10 items-center justify-center"
              >
                <Text className="text-2xl text-slate-900">✕</Text>
              </TouchableOpacity>
              <View className="flex-1">
                <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Create a Room</Text>
                {isHive && (
                  <Text className="text-sm font-spaceGrotesk text-slate-500">
                    Learn with people in your local community.
                  </Text>
                )}
              </View>
            </View>

            {/* Form */}
            <View className="gap-4">
              <TextInput
                value={roomName}
                onChangeText={setRoomName}
                placeholder={isHive ? "Room Name" : "Room name eg., Casual chat"}
                placeholderTextColor="#CBD5E1"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
              />

              <TextInput
                value={language}
                onChangeText={setLanguage}
                placeholder={isHive ? "Language Focus" : "Select your language"}
                placeholderTextColor="#CBD5E1"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
              />

              {isHive && (
                <TextInput
                  placeholder="Level (Beginner/Intermediate/Advanced)"
                  placeholderTextColor="#CBD5E1"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
                />
              )}

              {!isHive && (
                <View className="flex-row gap-3">
                  {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <TouchableOpacity
                      key={lvl}
                      activeOpacity={0.85}
                      onPress={() => setLevel(lvl)}
                      className={`flex-1 rounded-full border-2 py-3 ${
                        level === lvl ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <Text
                        className={`text-center text-sm font-spaceGrotesk font-semibold ${
                          level === lvl ? 'text-[#4C1D95]' : 'text-slate-600'
                        }`}
                      >
                        {lvl}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {!isHive && (
                <View className="flex-row items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <Text className="text-base font-spaceGrotesk font-medium text-slate-700">Max participants</Text>
                  <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMaxParticipants(Math.max(2, maxParticipants - 1))}
                      className="h-8 w-8 items-center justify-center rounded-full bg-slate-200"
                    >
                      <Text className="text-lg font-bold text-slate-700">−</Text>
                    </TouchableOpacity>
                    <Text className="text-lg font-spaceGrotesk font-bold text-slate-900">{maxParticipants}</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMaxParticipants(Math.min(20, maxParticipants + 1))}
                      className="h-8 w-8 items-center justify-center rounded-full bg-slate-200"
                    >
                      <Text className="text-lg font-bold text-slate-700">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {isHive && (
                <TextInput
                  placeholder="Max Participants"
                  keyboardType="number-pad"
                  placeholderTextColor="#CBD5E1"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
                />
              )}

              {!isHive && (
                <View className="flex-row gap-4">
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setIsPublic(true)}
                    className={`flex-1 flex-row items-center gap-2 rounded-full border-2 px-4 py-3 ${
                      isPublic ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <View
                      className={`h-5 w-5 items-center justify-center rounded-full border-2 ${
                        isPublic ? 'border-[#4C1D95] bg-[#4C1D95]' : 'border-slate-300'
                      }`}
                    >
                      {isPublic && <View className="h-2 w-2 rounded-full bg-white" />}
                    </View>
                    <Text className="text-sm font-spaceGrotesk font-medium text-slate-700">Public (anyone)</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setIsPublic(false)}
                    className={`flex-1 flex-row items-center gap-2 rounded-full border-2 px-4 py-3 ${
                      !isPublic ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <View
                      className={`h-5 w-5 items-center justify-center rounded-full border-2 ${
                        !isPublic ? 'border-[#4C1D95] bg-[#4C1D95]' : 'border-slate-300'
                      }`}
                    >
                      {!isPublic && <View className="h-2 w-2 rounded-full bg-white" />}
                    </View>
                    <Text className="text-sm font-spaceGrotesk font-medium text-slate-700">Private (invite)</Text>
                  </TouchableOpacity>
                </View>
              )}

              {!isHive ? (
                <View className="flex-row gap-3">
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setIsFree(true)}
                    className={`flex-1 rounded-full border-2 py-4 ${
                      isFree ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <Text
                      className={`text-center text-base font-spaceGrotesk font-semibold ${
                        isFree ? 'text-[#4C1D95]' : 'text-slate-600'
                      }`}
                    >
                      Free
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setIsFree(false)}
                    className={`flex-1 rounded-full border-2 py-4 ${
                      !isFree ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <Text
                      className={`text-center text-base font-spaceGrotesk font-semibold ${
                        !isFree ? 'text-[#4C1D95]' : 'text-slate-600'
                      }`}
                    >
                      Paid
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TextInput
                  placeholder="Fee (Free or $)"
                  placeholderTextColor="#CBD5E1"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
                />
              )}
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleCreate}
              className="mt-8 w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">
                {isHive ? 'Next' : 'Create Room'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Success Modal */}
      <Modal visible={showSuccess} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          <View className="w-full rounded-3xl bg-white p-8">
            <Text className="mb-6 text-center text-2xl font-spaceGrotesk font-bold text-slate-900">
              Room Created!
            </Text>

            <View className="mb-6 h-20 w-full items-center justify-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Text className="text-4xl text-green-600">✓</Text>
              </View>
            </View>

            <View className="mb-6 gap-3">
              <View className="flex-row justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Text className="font-spaceGrotesk text-slate-600">Room Name:</Text>
                <Text className="font-spaceGrotesk font-semibold text-slate-900">Paris Chat Room</Text>
              </View>
              <View className="flex-row justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Text className="font-spaceGrotesk text-slate-600">Language Focus:</Text>
                <Text className="font-spaceGrotesk font-semibold text-slate-900">French</Text>
              </View>
              <View className="flex-row justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Text className="font-spaceGrotesk text-slate-600">Level:</Text>
                <Text className="font-spaceGrotesk font-semibold text-slate-900">All levels</Text>
              </View>
              <View className="flex-row justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Text className="font-spaceGrotesk text-slate-600">Participant:</Text>
                <Text className="font-spaceGrotesk font-semibold text-slate-900">15max</Text>
              </View>
              <View className="flex-row justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Text className="font-spaceGrotesk text-slate-600">Fees:</Text>
                <Text className="font-spaceGrotesk font-semibold text-slate-900">3$</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleContinueFromSuccess}
              className="w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateRoomScreen;

