import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import LessonCard from '../components/lesson/LessonCard';
import type { RootStackParamList } from '../navigation/AppNavigator';

type LessonTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LessonTopics'>;

const topics = [
  {
    id: 1,
    title: 'Greetings',
    lessonCount: 10,
    duration: '~5 minutes',
    type: 'Speaking & Listening',
    showAIBadge: false,
  },
  {
    id: 2,
    title: 'Introduction',
    lessonCount: 15,
    duration: '~5 minutes',
    type: 'Speaking & Listening',
    showAIBadge: false,
  },
  {
    id: 3,
    title: 'Ordering an Uber',
    lessonCount: 5,
    duration: '~5 minutes',
    type: 'Speaking & Listening',
    showAIBadge: true,
  },
  {
    id: 4,
    title: 'Telling the Time',
    lessonCount: 5,
    duration: '~5 minutes',
    type: 'Speaking & Listening',
    showAIBadge: false,
  },
  {
    id: 5,
    title: 'Price Haggling',
    lessonCount: 5,
    duration: '~5 minutes',
    type: 'Speaking & Listening',
    showAIBadge: false,
  },
];

const LessonTopicsScreen = ({ navigation, route }: LessonTopicsScreenProps): JSX.Element => {
  const lessonId = route.params?.lessonId || 1;

  const handleTopicPress = (topicId: number) => {
    navigation.navigate('Lesson', { topicId, lessonNumber: 1, totalLessons: topics[topicId - 1].lessonCount });
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center px-6 pt-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="mr-4 h-10 w-10 items-center justify-center"
            >
              <Text className="text-2xl text-slate-900">←</Text>
            </TouchableOpacity>
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Level {lessonId}</Text>
          </View>

          <ScrollView bounces={false} className="flex-1 px-6">
            {topics.map((topic) => (
              <LessonCard
                key={topic.id}
                title={topic.title}
                lessonCount={topic.lessonCount}
                duration={topic.duration}
                type={topic.type}
                showAIBadge={topic.showAIBadge}
                onPress={() => handleTopicPress(topic.id)}
              />
            ))}

            <TouchableOpacity
              activeOpacity={0.85}
              disabled
              className="mb-6 w-full rounded-full bg-slate-200 py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-slate-400">
                Start Lesson
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LessonTopicsScreen;

