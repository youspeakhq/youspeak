import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type LessonMapScreenProps = NativeStackScreenProps<RootStackParamList, 'LessonMap'>;

const lessons = [
  { id: 1, icon: '🎧', locked: false, position: { top: 40, left: 40 } },
  { id: 2, icon: '🔒', locked: true, position: { top: 120, right: 40 } },
  { id: 3, icon: '🔒', locked: true, position: { top: 240, left: '50%' } },
  { id: 4, icon: '🔒', locked: true, position: { top: 360, left: 40 } },
  { id: 5, icon: '🔒', locked: true, position: { top: 480, right: 40 } },
  { id: 6, icon: '🔒', locked: true, position: { top: 600, left: '50%' } },
  { id: 7, icon: '🔒', locked: true, position: { top: 720, left: 40 } },
  { id: 8, icon: '🔒', locked: true, position: { top: 840, right: 40 } },
];

const LessonMapScreen = ({ navigation }: LessonMapScreenProps): JSX.Element => {
  const handleLessonPress = (lessonId: number, locked: boolean) => {
    if (!locked) {
      navigation.navigate('LessonTopics', { lessonId });
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-4 flex-row items-center px-6 pt-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="mr-4 h-10 w-10 items-center justify-center"
            >
              <Text className="text-2xl text-slate-900">←</Text>
            </TouchableOpacity>
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">AI SpeaX</Text>
          </View>

          {/* Lesson Path */}
          <ScrollView bounces={false} className="flex-1">
            <View className="relative min-h-screen px-6 py-8">
              {lessons.map((lesson, index) => {
                const isLeft = lesson.position.left !== undefined;
                const marginLeft = typeof lesson.position.left === 'string' ? '50%' : lesson.position.left;
                
                return (
                  <View
                    key={lesson.id}
                    style={{
                      position: 'absolute',
                      top: lesson.position.top,
                      ...(lesson.position.left !== undefined && { left: marginLeft }),
                      ...(lesson.position.right !== undefined && { right: lesson.position.right }),
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={() => handleLessonPress(lesson.id, lesson.locked)}
                      disabled={lesson.locked}
                      className={`h-24 w-24 items-center justify-center rounded-full border-4 ${
                        lesson.locked
                          ? 'border-slate-200 bg-slate-50'
                          : 'border-[#4C1D95] bg-[#4C1D95]'
                      }`}
                      style={{
                        shadowColor: lesson.locked ? '#CBD5E1' : '#4C1D95',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 6,
                      }}
                    >
                      <Text className="text-3xl">{lesson.icon}</Text>
                      {lesson.id === 1 && !lesson.locked && (
                        <View className="absolute -right-1 -top-1 h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
                          <Text className="text-xs">⚡</Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    <Text
                      className={`mt-2 text-center text-sm font-spaceGrotesk font-medium ${
                        lesson.locked ? 'text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      Lesson {lesson.id}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LessonMapScreen;

