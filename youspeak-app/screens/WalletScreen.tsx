import { StatusBar } from 'expo-status-bar';
import type { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import TransactionItem from '../components/lesson/TransactionItem';
import type { RootStackParamList } from '../navigation/AppNavigator';

type WalletScreenProps = NativeStackScreenProps<RootStackParamList, 'Wallet'>;

const transactions = [
  {
    id: 1,
    title: 'Battle Reward',
    date: 'Oct 7th, 2025 3:34pm',
    amount: 10,
    type: 'credit' as const,
  },
  {
    id: 2,
    title: 'Lesson Completion',
    date: 'Oct 7th, 2025 3:34pm',
    amount: 15,
    type: 'credit' as const,
  },
  {
    id: 3,
    title: 'Battle Staking',
    date: 'Oct 7th, 2025 3:34pm',
    amount: -15,
    type: 'debit' as const,
  },
  {
    id: 4,
    title: 'Battle Reward',
    date: 'Oct 7th, 2025 3:34pm',
    amount: 50,
    type: 'credit' as const,
  },
  {
    id: 5,
    title: 'Battle Staking',
    date: 'Oct 7th, 2025 3:34pm',
    amount: -15,
    type: 'debit' as const,
  },
];

const WalletScreen = ({ navigation }: WalletScreenProps): JSX.Element => {
  const balance = 300;
  const dollarValue = (balance * 0.01).toFixed(2);

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
            <Text className="text-2xl font-spaceGrotesk font-bold text-slate-900">Wallet</Text>
          </View>

          <ScrollView bounces={false} className="flex-1 px-6">
            {/* Balance Card */}
            <View
              className="relative mb-6 rounded-3xl bg-slate-900 p-6"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.2,
                shadowRadius: 16,
                elevation: 10,
              }}
            >
              <View className="mb-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <View className="h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                    <Text className="text-lg font-spaceGrotesk font-bold text-slate-900">SPK</Text>
                  </View>
                </View>
                <View className="rounded-full bg-yellow-400/20 px-4 py-2">
                  <Text className="text-sm font-spaceGrotesk font-semibold text-yellow-400">Premium</Text>
                </View>
              </View>

              <Text className="mb-1 text-4xl font-spaceGrotesk font-bold text-white">
                {balance} <Text className="text-2xl">SPKs</Text>
              </Text>

              <View className="absolute bottom-6 right-6 h-16 w-16 items-center justify-center rounded-full bg-slate-800">
                <Text className="text-base font-spaceGrotesk font-semibold text-white">${dollarValue}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="mb-6 flex-row gap-3">
              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-4"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Text className="text-base font-spaceGrotesk font-semibold text-slate-700">Withdraw</Text>
                <Text className="text-slate-700">↗</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-4"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Text className="text-base font-spaceGrotesk font-semibold text-slate-700">Convert</Text>
                <Text className="text-slate-700">⇄</Text>
              </TouchableOpacity>
            </View>

            {/* Transactions */}
            <Text className="mb-4 text-xl font-spaceGrotesk font-bold text-slate-900">Transactions</Text>

            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
                type={transaction.type}
              />
            ))}

            <View className="h-8" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WalletScreen;

