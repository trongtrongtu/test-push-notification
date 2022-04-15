import Model from '../models/model';
import { sendNotificationToClient } from '../notify';

const messagesModel = new Model('messages');
let tokens = []

export const messagesPage = async (req, res) => {
  try {
    // const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: [] });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addTokenUser = async (req, res) => {
  const { token } = req.body;
  try {
    if (!tokens?.find(item => item === token)) {
      tokens = [
        ...tokens,
        token
      ];
    }
    console.log('tokens: ', tokens);
    res.status(200).json('ok');
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    // const data = await messagesModel.insertWithReturn(columns, values);
    const notificationData = {
      title: name,
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: values });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
