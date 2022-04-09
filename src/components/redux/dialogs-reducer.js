const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi what happens" },
        { id: 3, message: "everything cool" },
      ],
    newMessageText: "",
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Slavik" },
        { id: 3, name: "Anastasiia" },
        { id: 4, name: "Valerii" },
      ],
}

const dialogsReducer = (state = initialState, action) => {

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