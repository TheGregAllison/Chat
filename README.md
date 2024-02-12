# Chat README

## UI Screenshot:

![Chat Screenshot](https://github.com/TheGregAllison/Chat/assets/146021687/4cc019c7-301c-4567-860f-7b17e75fd3b9 =250x)

## Summary:

- This application is created with React Native and allows users to communicate with each other in a chatroom natively from their smartphone.

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository to your local machine:

   `git clone https://github.com/thegregallison/Chat.git`

2. Navigate into the project directory:

   `cd chat`

3. Install dependencies using npm or yarn:

   `npm install`

   or

   `yarn install`

4. Set up Firebase:

- Create a Firebase project and enable Firestore and Firebase Authentication.
- Copy your Firebase config object and replace the one in `App.js`.
- Set up Firestore rules to allow read and write access to your messages collection.

5. Run the app:

   `npm start`

   or

   `yarn start`

6. Follow the instructions in the Expo CLI to run the app on your preferred platform (iOS, Android, or web).

## Dependencies

The messaging app relies on the following dependencies:

- `@react-native-community/netinfo`: For monitoring network connectivity.
- `@react-navigation/native`: For navigation within the app.
- `@react-navigation/native-stack`: For stack-based navigation.
- `expo`: The Expo framework for building React Native apps.
- `firebase`: For integrating Firebase services.
- `react`: The core React library.
- `react-native`: The core React Native library.
- `react-native-gifted-chat`: For displaying chat messages.
- `@react-native-async-storage/async-storage`: For storing chat messages locally.
- `expo-image-picker`: For accessing the device's image library.
- `expo-location`: For accessing the device's location.
- `react-native-maps`: For displaying maps.
- `expo-media-library`: For accessing media files on the device.

For a complete list of dependencies, check the `package.json` file.

## Usage

Once the app is running, users can:

- Start chatting anonymously by entering their name and choosing a background color.
- Send text messages and images.
- Share their current location.
- View received messages in real-time.
- Experience offline functionality with cached messages when internet connection is lost.
