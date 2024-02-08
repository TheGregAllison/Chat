import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { getAuth, signInAnonymously } from 'firebase/auth';

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState('');
  const [background, setBackground] = useState('');
  const colors = ['#474056', '#090C08', '#8A95A5', '#B9C6AE'];

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate('Chat', {
          name: name,
          background: background,
          id: result.user.uid,
        });
        Alert.alert('Signed in Successfully!');
      })
      .catch((error) => {
        Alert.alert('Unable to sign in - Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.startBox}>
          <TextInput
            accessibilityLabel="Input username"
            accessibilityRole="text"
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.chooseBackgroundColor}>
            Change Background Color
          </Text>
          <View style={styles.colorButtonsBox}>
            {colors.map((color, index) => (
              <TouchableOpacity
                accessibilityLabel="Color Button"
                accessibilityHint="Lets you choose a backgroundcolor for your chat."
                accessibilityRole="button"
                key={index}
                style={[
                  styles.colorButton,
                  { backgroundColor: color },
                  background === color && styles.selected,
                ]}
                onPress={() => setBackground(color)}
              />
            ))}
          </View>
          <TouchableOpacity
            accessibilityLabel="Start Chatting"
            accessibilityRole="button"
            style={styles.button}
            onPress={signInUser}
          >
            <Text style={styles.startChatting}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView behavior="padding" />
        ) : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startBox: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
    width: '90%',
    height: '45%',
    alignItems: 'center',
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '90%',
    padding: 15,
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 0,
    borderRadius: 10,
    fontSize: 16,
  },
  chooseBackgroundColor: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginTop: 45,
  },
  colorButtonsBox: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    top: 5,
    marginBottom: 60,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#757083',
    padding: 15,
    width: '90%',
    marginBottom: 25,
    borderRadius: 10,
  },
  startChatting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Start;
