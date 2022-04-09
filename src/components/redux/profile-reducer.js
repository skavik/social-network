const ADD_POST =  "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"

let initialState = {
           postsData: [
          {
            id: 1,
            ava: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg",
            post: "My first post",
            likeCount: 15,
          },
          {
            id: 2,
            ava: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg",
            post: "Hi, how are you",
            likeCount: 6,
          },
          {
            id: 3,
            ava: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg",
            post: "Hi, I'm good",
            likeCount: 3,
          },
        ],
        newPostText: "",
    
}

const profileReducer = (state = initialState, action) => {

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