import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import eventBus from './EventBus';

export default function SubscriberScreen() {
  const [message, setMessage] = useState('No event received yet.');

  useEffect(() => {
    const handleEvent = (data) => {
      setMessage(data.message);
    };

    eventBus.on('myCustomEvent', handleEvent);

    return () => {
      eventBus.off('myCustomEvent', handleEvent); // Clean up
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Subscriber Screen</Text>
      <Text>{message}</Text>
    </View>
  );
}
