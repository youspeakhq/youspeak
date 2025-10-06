import type { JSX } from 'react';
import { Text, View } from 'react-native';

type TransactionItemProps = {
  title: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
};

const TransactionItem = ({ title, date, amount, type }: TransactionItemProps): JSX.Element => {
  const isCredit = type === 'credit';
  
  return (
    <View
      className="mb-3 flex-row items-center justify-between rounded-2xl border border-slate-200 bg-white p-4"
      style={{ 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.03, 
        shadowRadius: 4, 
        elevation: 2 
      }}
    >
      <View className="flex-row items-center gap-3">
        <View className={`h-10 w-10 items-center justify-center rounded-full ${isCredit ? 'bg-green-100' : 'bg-red-100'}`}>
          <Text className={`text-xl ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
            {isCredit ? '⊕' : '⊖'}
          </Text>
        </View>
        <View>
          <Text className="text-base font-spaceGrotesk font-semibold text-slate-900">{title}</Text>
          <Text className="text-xs font-spaceGrotesk text-slate-500">{date}</Text>
        </View>
      </View>
      <Text className={`text-base font-spaceGrotesk font-bold ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
        {isCredit ? '+' : ''}{amount} SPK
      </Text>
    </View>
  );
};

export default TransactionItem;

