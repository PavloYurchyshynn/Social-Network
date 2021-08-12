const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andriy' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your name?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'bruh' },
        { id: 5, message: 'hello' },
    ],
    newMessageBody: '',
}

const messageReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            } 
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 6, message: body }]
            }
        }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default messageReduser;