import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { LogBox, Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCNnh7L7IeQ8rtyxKrKa5q-uKG5NpZBJB0',
    authDomain: 'chat-e70c6.firebaseapp.com',
    projectId: 'chat-e70c6',
    storageBucket: 'chat-e70c6.appspot.com',
    messagingSenderId: '169910228512',
    appId: '1:169910228512:web:57a19baff657ed112b4e45',
    measurementId: 'G-SJ7Z9RS2D6',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const Stack = createNativeStackNavigator();
  const connectionStatus = useNetInfo();

  // Check Network Status
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection Lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
