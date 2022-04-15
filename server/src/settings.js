import dotenv from 'dotenv';
import livegame_fb_test from './test-event-game-firebase-adminsdk-g66mg-1d98d7e8b1.json';

dotenv.config();
export const connectionString = process.env.CONNECTION_STRING;
export const googleApplicationCredentials = livegame_fb_test;
