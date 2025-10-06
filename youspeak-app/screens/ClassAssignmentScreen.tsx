import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type ClassAssignmentScreenProps = NativeStackScreenProps<RootStackParamList, 'ClassAssignment'>;

const ClassAssignmentScreen = ({ navigation, route }: ClassAssignmentScreenProps): JSX.Element => {
  const className = route.params?.className || 'Class A - Beginner';
  const teacherName = route.params?.teacherName || 'Mr. Kim';

  const handleGoToDashboard = () => {
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-between px-6 pb-8 pt-12">
          {/* Illustration placeholder */}
          <View className="flex-1 items-center justify-center">
            <View className="mb-8 h-64 w-64 items-center justify-center rounded-full bg-blue-100">
              <Text className="text-8xl">👩‍🏫</Text>
              <Text className="text-4xl">👨‍💻</Text>
              <Text className="text-4xl">👩‍💼</Text>
            </View>

            <View className="items-center gap-4">
              <Text className="text-center text-3xl font-spaceGrotesk font-bold text-slate-900">
                Welcome to You Speak!
              </Text>
              <Text className="text-center text-base font-spaceGrotesk text-slate-500">
                You've successfully joined your class.
              </Text>

              <View
                className="mt-4 w-full rounded-3xl border border-slate-200 bg-white p-5"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <View className="flex-row items-center gap-4">
                  <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#4C1D95]">
                    <Text className="text-2xl text-white">📚</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-spaceGrotesk font-bold text-slate-900">{className}</Text>
                    <Text className="text-sm font-spaceGrotesk text-slate-500">{teacherName}</Text>
                  </View>
                </View>
              </View>

              <Text className="mt-6 text-center text-base font-spaceGrotesk font-medium text-slate-700">
                Ready to start learning? Let's go 🚀
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleGoToDashboard}
            className="w-full rounded-full bg-[#4C1D95] py-4"
          >
            <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ClassAssignmentScreen;

