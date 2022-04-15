import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings';

const serviceAccount = googleApplicationCredentials;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-event-game-default-rtdb.asia-southeast1.firebasedatabase.app'
  // databaseURL: 'https://push-notifications-article.firebaseio.com',
});

export const messaging = admin.messaging();
