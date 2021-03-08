import update from 'react-addons-update';
import { ADD_CHAT, IS_NEW_MSG, SUCCESS_CHATS_LOADING } from '@actions/chats';
import { SEND_MESSAGE } from '@actions/messages';

const storeChats = {
    chats: [],
    newMsg: -1
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.data }
            });
        };
        case ADD_CHAT: {
            const id = (Object.keys(store.chats).length + 1).toString();
            return update(store, {
                chats: {
                    $merge: {
                        [id]: {
                            id: id,
                            title: action.title,
                            messageList: [0]
                        }
                    }
                }
            });
        }
        case SEND_MESSAGE: {
            return update(store, {
                chats: {
                    [action.payload.chatID]: {
                        messageList: {
                            $push: [action.payload.id]
                        }
                    }
                }
            });
        }
        case IS_NEW_MSG: {
            return update(store, {
                newMsg: { $set: action.chatID }
            });
        }
        default: {
            return store;
        }
    }
}
