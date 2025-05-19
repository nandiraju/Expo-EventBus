import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PublisherScreen from './PublisherScreen';
import SubscriberScreen from './SubscriberScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Publisher">
        <Stack.Screen name="Publisher" component={PublisherScreen} />
        <Stack.Screen name="Subscriber" component={SubscriberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
