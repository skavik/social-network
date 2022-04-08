const ADD_POST =  "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                ava: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg",
                post: state.newPostText,
                likeCount: 0,
              };
        
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    };
    
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewTextPostActionCreator = (text) => ({
    type: 'UPDATE-NEW-TEXT-POST',
    newText: text
  })

export default profileReducer;