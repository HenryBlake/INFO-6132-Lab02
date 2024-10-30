import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mockData = [
  { id: '1', name: 'Grocery', amount: 50, date: '2024-10-01' },
  { id: '2', name: 'Rent', amount: 500, date: '2024-10-02' },
  { id: '3', name: 'Salary', amount: 2000, date: '2024-10-03' },
];

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.cardContent}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>${item.amount}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F5F5F5' },
  card: { backgroundColor: '#FFF', padding: 16, marginVertical: 8, borderRadius: 8, elevation: 2 },
  cardContent: { flexDirection: 'row', justifyContent: 'space-between' },
  transactionName: { fontSize: 18, fontWeight: 'bold' },
  transactionAmount: { fontSize: 16, color: '#FF5733' },
  transactionDate: { fontSize: 14, color: '#888' },
});

export default TransactionsList;
