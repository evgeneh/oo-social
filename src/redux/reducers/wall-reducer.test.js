import {wallReducer, addNewPost } from "./wall-reducer";

it('+++ reducer for ADD_INPUT', () => {


    let state={
        userId: 2,
        posts: [
            { postId: 1, date: "2020-02-10T22:06:17.762Z", text: "Hello, my friend\n:)", owner: {userId: 2, photo: "https://s5o.ru/storage/simple/ru/edt/82/57/c6/1b/ruef2b9f9c218.jpg", fullName: "Eldar Sh"} }
        ],
        totalCount: 14,
        isFetching: false
    }

    let action = addNewPost({ postId: 2, text: "dd"})

    state = wallReducer(state, action)

    expect(state.totalCount).toBe(15)
    expect(state.posts[0].postId).toBe(2)
});