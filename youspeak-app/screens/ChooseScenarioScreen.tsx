import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import type { JSX } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/AppNavigator';

type ChooseScenarioScreenProps = NativeStackScreenProps<RootStackParamList, 'ChooseScenario'>;

const scenarios = [
  { id: 1, title: 'Job Interview Battle', stakeRange: '10-200 Spks' },
  { id: 2, title: 'Music Battle', stakeRange: '10-200 Spks' },
  { id: 3, title: 'Poetry Battle', stakeRange: '10-200 Spks' },
  { id: 4, title: 'Reading Battle', stakeRange: '10-200 Spks' },
  { id: 5, title: 'Essay Writing Battle', stakeRange: '10-200 Spks' },
  { id: 6, title: 'Essay Writing Battle', stakeRange: '10-200 Spks' },
];

const ChooseScenarioScreen = ({ navigation }: ChooseScenarioScreenProps): JSX.Element => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');
  const [showFindingOpponent, setShowFindingOpponent] = useState(false);
  const [showOpponentFound, setShowOpponentFound] = useState(false);

  const handleJoinScenario = (id: number) => {
    setSelectedScenario(id);
    setShowStakeModal(true);
  };

  const handleConfirmStake = () => {
    setShowStakeModal(false);
    setShowFindingOpponent(true);
    
    // Simulate finding opponent
    setTimeout(() => {
      setShowFindingOpponent(false);
      setShowOpponentFound(true);
    }, 3000);
  };

  const handleContinueToBattle = () => {
    setShowOpponentFound(false);
    navigation.navigate('BattleArena', { battleId: selectedScenario! });
  };

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          {/* Header */}
          <View className="mb-6 flex-row items-center px-6 pt-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="mr-4 h-10 w-10 items-center justify-center"
            >
              <Text className="text-2xl text-white">←</Text>
            </TouchableOpacity>
            <View>
              <Text className="text-2xl font-spaceGrotesk font-bold text-white">Choose a Scenerio</Text>
              <Text className="text-sm font-spaceGrotesk text-white/70">
                Have a real conversation with someone!
              </Text>
            </View>
          </View>

          {/* Scenarios List */}
          <ScrollView bounces={false} className="flex-1 px-6">
            {scenarios.map((scenario) => (
              <View
                key={scenario.id}
                className="mb-4 overflow-hidden rounded-3xl border border-slate-700 bg-white p-6"
              >
                <Text className="mb-2 text-lg font-spaceGrotesk font-bold text-slate-900">{scenario.title}</Text>
                <Text className="mb-4 text-sm font-spaceGrotesk text-slate-600">
                  Stake range: {scenario.stakeRange}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => handleJoinScenario(scenario.id)}
                  className={`w-full rounded-full py-3 ${
                    selectedScenario === scenario.id ? 'bg-[#4C1D95]' : 'bg-slate-100'
                  }`}
                >
                  <Text
                    className={`text-center text-base font-spaceGrotesk font-semibold ${
                      selectedScenario === scenario.id ? 'text-white' : 'text-slate-700'
                    }`}
                  >
                    Join
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
            <View className="h-8" />
          </ScrollView>
        </View>
      </SafeAreaView>

      {/* Set Stake Modal */}
      <Modal visible={showStakeModal} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full rounded-3xl bg-white p-8">
            <Text className="mb-6 text-center text-2xl font-spaceGrotesk font-bold text-slate-900">
              Set your Stake
            </Text>
            <TextInput
              value={stakeAmount}
              onChangeText={setStakeAmount}
              placeholder="Enter SPKs (20-200)"
              keyboardType="number-pad"
              placeholderTextColor="#CBD5E1"
              className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-lg font-spaceGrotesk text-slate-900"
            />
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleConfirmStake}
              className="w-full rounded-full bg-[#4C1D95] py-4"
            >
              <Text className="text-center text-lg font-spaceGrotesk font-semibold text-white">
                Confirm & Match Opponent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Finding Opponent Modal */}
      <Modal visible={showFindingOpponent} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full items-center rounded-3xl bg-white p-12">
            <Text className="mb-4 text-center text-2xl font-spaceGrotesk font-bold text-slate-900">
              Finding Opponent
            </Text>
            <Text className="mb-8 text-center text-base font-spaceGrotesk text-slate-600">
              Have a real conversation with someone!
            </Text>
            <View className="mb-8 h-24 w-24 items-center justify-center">
              <Text className="text-6xl">⏳</Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Opponent Found Modal */}
      <Modal visible={showOpponentFound} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full items-center rounded-3xl bg-white p-8">
            <View className="mb-6 h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <Text className="text-5xl">✓</Text>
            </View>
            <Text className="mb-6 text-center text-2xl font-spaceGrotesk font-bold text-slate-900">
              Opponent Found!
            </Text>
            <View className="mb-6 w-full rounded-2xl bg-green-700 p-5">
              <View className="flex-row items-center gap-3">
                <View className="h-14 w-14 overflow-hidden rounded-full bg-slate-200">
                  <View className="h-full w-full items-center justify-center">
                    <Text className="text-2xl">👤</Text>
                  </View>
                </View>
                <View>
                  <Text className="text-lg font-spaceGrotesk font-bold text-white">Dane White</Text>
                  <Text className="text-sm font-spaceGrotesk text-white/90">B1-Intermediate - Nigeria</Text>
                </View>
              </View>
            </View>
            <Text className="mb-6 text-center text-lg font-spaceGrotesk font-bold text-red-600">
              Battle Starts in 10s
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleContinueToBattle}
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

export default ChooseScenarioScreen;

