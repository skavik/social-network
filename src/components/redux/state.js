let store = {
  _state: {
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi what happens" },
        { id: 3, message: "everything cool" },
      ],
      newMessageText: "Enter message text",
      dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Slavik" },
        { id: 3, name: "Anastasiia" },
        { id: 4, name: "Valerii" },
      ],
    },

    profilePage: {
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
      newPostText: "Enter text",
    },

    navbar: {
      friendsBox: [
        {
          id: 1,
          name: "Dima",
          surname: "Bilii",
          ava: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        },
        {
          id: 2,
          name: "Slavik",
          surname: "Homich",
          ava: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
        },
        {
          id: 3,
          name: "Anastasiia",
          surname: "Dukas",
          ava: "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?im=Resize=(1230,900)",
        },
      ],
    },
  },
  getStore() {
    return this._state;
  },
  observer(el) {
    this.renderReactTree = el;
  },
  renderReactTree() {},

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        ava: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg",
        post: this._state.profilePage.newPostText,
        likeCount: 0,
      };

      this._state.profilePage.postsData.push(newPost);
      this.renderReactTree();
      this._state.profilePage.newPostText = "";
    } else if (action.type === "UPDATE-NEW-TEXT-POST") {
      this._state.profilePage.newPostText = action.newText;
      this.renderReactTree();
    } else if (action.type === "SEND-MESSAGE") {
      let Message = { id: 1, message: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messagesData.push(Message);
      this._state.dialogsPage.newMessageText = "";
      this.renderReactTree();
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this.renderReactTree();
    }
  },
};

export let addPostActionCreator = () => ({type: 'ADD-POST'})
 
export let updateNewTextPostActionCreator = (text) => ({
     type: 'UPDATE-NEW-TEXT-POST',
     newText: text
   })
 

export default store;

// http://themekit.frontendmatter.com/dist/themes/admin/index.html
