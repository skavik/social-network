let state = {
  dialogsPage: {
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi what happens" },
      { id: 3, message: "everything cool" },
    ],
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Slavik" },
      { id: 3, name: "Anastasiia" },
      { id: 4, name: "Valerii" },
    ],
  },

  profilePage: {
    postsData: [
      { id: 1, ava: "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60", 
      post: "My first post", likeCount: 15 },
      { id: 2, ava: "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60", 
      post: "Hy, how are you", likeCount: 6 },
    ],
  },

  navbar: {
    friendsBox: [
      { id: 1, name: "Dima", surname: "Bilii", ava: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"},
      { id: 2, name: "Slavik", surname: "Homich", ava: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" },
      { id: 3, name: "Anastasiia", surname: "Dukas", ava: "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?im=Resize=(1230,900)" },
      
    ]
  }
};

export default state;

// http://themekit.frontendmatter.com/dist/themes/admin/index.html