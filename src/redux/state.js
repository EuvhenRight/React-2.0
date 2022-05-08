let EnterNewState = () => {

};


let Appstate = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
            { id: 2, message: 'I love you!', likesCount: 150 },
            // { id: 3, message: 'I love you!', likesCount: 150 },
            // { id: 4, message: 'I love you!', likesCount: 150 }
        ],
        newPostText: 'privet'
    },

    dialogPage: {
        dialogs: [
            { id: 1, name: 'Vasya', avatar: "https://кутята.рф/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg" },
            { id: 2, name: 'Harley', avatar: "https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg" },
            { id: 3, name: 'Mira', avatar: "https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c" },
            { id: 4, name: 'Richi' },
            { id: 5, name: 'Ken' }
        ],
        messages: [
            { id: 1, message: 'How are you?' },
        ]
    },
    sideBar: {
        friends: [
            { id: 1, name: 'Vasya', avatar: "https://кутята.рф/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg" },
            { id: 2, name: 'Harley', avatar: "https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg" },
            { id: 3, name: 'Mira', avatar: "https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c" }
        ]
    }
}

export const newPost = () => {
    let newPostmessage = {
        id: 5,
        message: Appstate.profilePage.newPostText,
        likesCount: 0
    };

    Appstate.profilePage.posts.push(newPostmessage);
    Appstate.profilePage.newPostText = '';
    EnterNewState(Appstate);
};

export const updateNewPostText = (newText) => {
    Appstate.profilePage.newPostText = newText;
    EnterNewState(Appstate);
};

export const subscriber = (observer) => {
    EnterNewState = observer;

}



export default Appstate;