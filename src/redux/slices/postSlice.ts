import { createSlice } from '@reduxjs/toolkit';
import { Post } from './../../components/content/blogs/blog';

interface PostState{
    posts:Post[];
}

const initialState:PostState = {
    posts:[],
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts(state,action){
            state.posts = action.payload;
        },
        addPosts(state,action){
            state.posts.push(action.payload);
        },
        deletePost(state,action){
            state.posts.filter(post => post.id !== action.payload)
        }

    }
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;