import React from 'react';
import { View, Text } from 'react-native';

const Summary = () => {
  const totalExpenses = 550; // 模拟总支出

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Expenses: {totalExpenses} USD</Text>
    </View>
  );
};

export default Summary;
