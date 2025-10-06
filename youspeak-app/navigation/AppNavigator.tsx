import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { JSX } from 'react';

import AISpeaXDetailScreen from '../screens/AISpeaXDetailScreen';
import AudioChallengeScreen from '../screens/AudioChallengeScreen';
import ClassAssignmentScreen from '../screens/ClassAssignmentScreen';
import DiagnosticCheckScreen from '../screens/DiagnosticCheckScreen';
import FluencyTestScreen from '../screens/FluencyTestScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import LearnScreen from '../screens/LearnScreen';
import LessonMapScreen from '../screens/LessonMapScreen';
import LessonScreen from '../screens/LessonScreen';
import LessonTopicsScreen from '../screens/LessonTopicsScreen';
import LoginScreen from '../screens/LoginScreen';
import PersonalizeProfileScreen from '../screens/PersonalizeProfileScreen';
import PlacementResultsScreen from '../screens/PlacementResultsScreen';
import PlanSelectionScreen from '../screens/PlanSelectionScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import ReadingTestScreen from '../screens/ReadingTestScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SkillLevelScreen from '../screens/SkillLevelScreen';
import SpeakingRoomsScreen from '../screens/SpeakingRoomsScreen';
import SplashScreen from '../screens/SplashScreen';
import VerifyAccountScreen from '../screens/VerifyAccountScreen';
import WalletScreen from '../screens/WalletScreen';
import WelcomeLevelScreen from '../screens/WelcomeLevelScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import WritingTestScreen from '../screens/WritingTestScreen';

type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  VerifyAccount: { email: string };
  ProfileSetup: undefined;
  PersonalizeProfile: undefined;
  LanguageSelection: undefined;
  SkillLevel: undefined;
  DiagnosticCheck: undefined;
  AudioChallenge: undefined;
  ReadingTest: undefined;
  WritingTest: undefined;
  FluencyTest: undefined;
  PlacementResults: { level?: string; scores?: { listening: number; reading: number; writing: number; speaking: number } };
  WelcomeLevel: { level: string };
  ClassAssignment: { className?: string; teacherName?: string };
  PlanSelection: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  SpeakingRooms: undefined;
  AISpeaXDetail: undefined;
  LessonMap: undefined;
  LessonTopics: { lessonId: number };
  Lesson: { topicId: number; lessonNumber: number; totalLessons: number };
  Wallet: undefined;
  Learn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
        <Stack.Screen name="PersonalizeProfile" component={PersonalizeProfileScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="SkillLevel" component={SkillLevelScreen} />
        <Stack.Screen name="DiagnosticCheck" component={DiagnosticCheckScreen} />
        <Stack.Screen name="AudioChallenge" component={AudioChallengeScreen} />
        <Stack.Screen name="ReadingTest" component={ReadingTestScreen} />
        <Stack.Screen name="WritingTest" component={WritingTestScreen} />
        <Stack.Screen name="FluencyTest" component={FluencyTestScreen} />
        <Stack.Screen name="PlacementResults" component={PlacementResultsScreen} />
        <Stack.Screen name="WelcomeLevel" component={WelcomeLevelScreen} />
        <Stack.Screen name="ClassAssignment" component={ClassAssignmentScreen} />
        <Stack.Screen name="PlanSelection" component={PlanSelectionScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpeakingRooms" component={SpeakingRoomsScreen} />
        <Stack.Screen name="AISpeaXDetail" component={AISpeaXDetailScreen} />
        <Stack.Screen name="LessonMap" component={LessonMapScreen} />
        <Stack.Screen name="LessonTopics" component={LessonTopicsScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
export type { RootStackParamList };
