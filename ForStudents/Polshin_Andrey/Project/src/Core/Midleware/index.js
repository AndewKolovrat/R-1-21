import bot from './Bot';
import newMsgFlug from './newMsgFlug'
import { apiMiddleware } from 'redux-api-middleware';

export default [apiMiddleware, bot, newMsgFlug];
