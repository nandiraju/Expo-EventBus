import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then(value => {
      if (value !== null) {
        setStoredValue(JSON.parse(value));
      }
    });
  }, [key]);

  const setValue = async (value) => {
    setStoredValue(value);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
