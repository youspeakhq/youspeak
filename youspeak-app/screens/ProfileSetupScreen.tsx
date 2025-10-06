import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.06,
  shadowRadius: 16,
  elevation: 6,
};

type ProfileSetupScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfileSetup'>;

const ProfileSetupScreen = ({ navigation }: ProfileSetupScreenProps): JSX.Element => {
  const [nickname, setNickname] = useState('');

  const handleUploadPhoto = () => {
    // TODO: Implement image picker and S3 upload
  };

  const handlePickAvatar = () => {
    // TODO: Implement avatar picker (DiceBear or Bedrock)
  };

  const handleContinue = () => {
    navigation.navigate('PersonalizeProfile');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pb-8 pt-6">
          <View className="mb-12 gap-2">
            <Text className="text-center text-3xl font-spaceGrotesk font-bold text-slate-900">Profile Setup</Text>
            <Text className="text-center text-base font-spaceGrotesk text-slate-500">
              Choose how you'll appear in class & live rooms.
            </Text>
          </View>

          <View className="gap-8">
            <View className="flex-row gap-4">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleUploadPhoto}
                className="flex-1 items-center gap-3 rounded-3xl border border-slate-200 bg-white p-6"
                style={cardShadowStyle}
              >
                <View className="h-24 w-24 items-center justify-center rounded-full bg-slate-100">
                  <Text className="text-4xl">📷</Text>
                </View>
                <Text className="text-center text-sm font-spaceGrotesk font-medium text-slate-600">
                  Tap to upload{'\n'}(JPG/PNG)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handlePickAvatar}
                className="flex-1 items-center gap-3 rounded-3xl border border-slate-200 bg-white p-6"
                style={cardShadowStyle}
              >
                <View className="h-24 w-24 items-center justify-center rounded-full bg-slate-100">
                  <Text className="text-4xl">📷</Text>
                </View>
                <Text className="text-center text-sm font-spaceGrotesk font-medium text-slate-600">
                  Tap to pick an{'\n'}avatar
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-2">
              <Text className="text-sm font-spaceGrotesk font-medium text-slate-600">Enter Nickname</Text>
              <TextInput
                value={nickname}
                onChangeText={setNickname}
                placeholder="Bennieb"
                autoCapitalize="none"
                placeholderTextColor="#94A3B8"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-spaceGrotesk text-slate-900"
              />
            </View>
          </View>

          <View className="mt-auto gap-3">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleContinue}
              className="w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Continue</Text>
            </TouchableOpacity>
            <Text className="text-center text-xs font-spaceGrotesk text-slate-400">
              Avatar & nickname required before joining live rooms.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileSetupScreen;

