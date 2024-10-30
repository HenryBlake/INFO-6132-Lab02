import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';  

import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsList" 
        component={TransactionsList} 
        options={{ title: 'Transactions' }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetail} 
        options={{ title: 'Transaction Detail' }} 
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = 'list'; 
            } else if (route.name === 'Summary') {
              iconName = 'pie-chart'; 
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5733',
          tabBarInactiveTintColor: '#888',
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={Summary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
