import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
} from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getStorage } from 'firebase/storage';
import { StyleSheet, LogBox, Alert } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
