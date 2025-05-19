import React from 'react';
import { View, Button, Text } from 'react-native';
import eventBus from './EventBus';

export default function PublisherScreen({ navigation }) {
  const publishEvent = () => {
    eventBus.emit('myCustomEvent', { message: 'Hello from Publisher!' });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Publisher Screen</Text>
      <Button title="Send Event" onPress={publishEvent} />
      <Button title="Go to Subscriber" onPress={() => navigation.navigate('Subscriber')} />
    </View>
  );
}
