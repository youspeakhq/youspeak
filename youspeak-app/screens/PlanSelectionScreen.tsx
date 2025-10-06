import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

const primaryColor = '#4C1D95';

const cardShadowStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 12,
  elevation: 4,
};

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: null,
    description: 'Basic lessons to get you started',
  },
  {
    id: 'personal',
    name: 'Personal',
    price: 7,
    description: 'Unlock full lessons & progress tracking',
  },
  {
    id: 'business',
    name: 'Business',
    price: 10,
    description: 'Advanced features for professionals',
  },
];

type PlanSelectionScreenProps = NativeStackScreenProps<RootStackParamList, 'PlanSelection'>;

const PlanSelectionScreen = ({ navigation }: PlanSelectionScreenProps): JSX.Element => {
  const [selectedPlan, setSelectedPlan] = useState('free');

  const handleContinue = () => {
    // TODO: Handle payment if premium plan selected
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView bounces={false}>
          <View className="flex-1 px-6 pb-8 pt-6">
            <View className="mb-12 gap-2">
              <Text className="text-3xl font-spaceGrotesk font-bold text-slate-900">Choose Your Plan</Text>
              <Text className="text-base font-spaceGrotesk text-slate-500">Pick the plan that fits your journey</Text>
            </View>

            <View className="gap-5">
              {plans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  activeOpacity={0.85}
                  onPress={() => setSelectedPlan(plan.id)}
                  className={`gap-2 rounded-3xl border bg-white p-6 ${
                    selectedPlan === plan.id ? 'border-[#4C1D95] bg-purple-50' : 'border-slate-200'
                  }`}
                  style={cardShadowStyle}
                >
                  <View className="flex-row items-baseline gap-2">
                    <Text className="text-xl font-spaceGrotesk font-bold text-slate-900">{plan.name}</Text>
                    {plan.price && (
                      <Text className="text-base font-spaceGrotesk font-semibold text-slate-600">
                        — ${plan.price}/month
                      </Text>
                    )}
                  </View>
                  <Text className="text-base font-spaceGrotesk text-slate-500">{plan.description}</Text>
                  {selectedPlan === plan.id && (
                    <View className="absolute right-5 top-5 h-6 w-6 items-center justify-center rounded-full bg-[#4C1D95]">
                      <Text className="text-xs font-bold text-white">✓</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <View className="mt-auto pt-12">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleContinue}
                className="w-full rounded-full bg-[#4C1D95] py-4"
              >
                <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PlanSelectionScreen;

