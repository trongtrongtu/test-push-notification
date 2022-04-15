import express from 'express';
import { messagesPage, addMessage, addTokenUser } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.post('/add-tokens-user', addTokenUser);

export default indexRouter;
