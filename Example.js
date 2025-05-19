import React from 'react';
import { View, Button, Text } from 'react-native';
import { useLocalStorage } from './useLocalStorage';

export default function Example() {
  const [user, setUser] = useLocalStorage('user', { name: 'Guest' });

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {user.name}</Text>
      <Button title="Change Name" onPress={() => setUser({ name: 'Srikanth' })} />
    </View>
  );
}
