
let initialState = {
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
}

const  navbarReducer = (state = initialState, action) => {

    return state
} 

export default navbarReducer;