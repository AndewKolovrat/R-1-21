import { RSAA, getJSON } from 'redux-api-middleware';

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING';

export const loadChats = id => ({
    [RSAA]: {
        endpoint: '/api/chats/',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: async (action, state, resonce) => {
                    const res = await getJSON(resonce);
                    return { data: JSON.parse(res) };
                }
            },
            ERROR_CHATS_LOADING,
        ],
    },
});

export const ADD_CHAT = '@@chats/ADD_CHAT';
export const addChat = (title) => ({
    type: ADD_CHAT,
    title
});

export const SEND_MESSAGE = '@@chats/SEND_MSG';
export const sendMsg = (id, sender, text, chatID) => ({
    type: SEND_MESSAGE,
    payload: {
        id,
        text,
        sender,
        ChatID
    }
});

export const IS_NEW_MSG = '@@chats/IS_NEW_MESSAGE';
export const newMsg = (chatID) => ({
    type: IS_NEW_MSG,
    chatID
});