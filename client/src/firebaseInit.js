import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyC4zsqO93M4kL8ks_hMjeBty-MoQBJ4_38",
  authDomain: "test-event-game.firebaseapp.com",
  databaseURL: "https://test-event-game-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-event-game",
  storageBucket: "test-event-game.appspot.com",
  messagingSenderId: "722720962982",
  appId: "1:722720962982:web:5d68bc3efa9bb7ed1c3767",
  measurementId: "G-7WH2PE10SP"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
