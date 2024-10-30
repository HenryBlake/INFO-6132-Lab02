import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: {transaction.amount} USD</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetail;
