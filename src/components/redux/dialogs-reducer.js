const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let Message = { id: 1, message: state.newMessageText };
            state.messagesData.push(Message);
            state.newMessageText = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default:
            return state;
    }
    
}

export const sentMessageActionCreator = () => ({type: "SEND-MESSAGE"})
export const updateNewMessageTextActionCreator = (text) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT", 
    newText: text
  })

export default dialogsReducer;