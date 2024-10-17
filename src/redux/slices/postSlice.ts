// src/redux/slices/postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Post {
    id: number;      // Yazının benzersiz kimliği
    title: string;   // Yazı başlığı
    content: string; // Yazı içeriği
    author: string;  // Yazı yazarı
    date: string;    // Yazının yayımlanma tarihi (ISO formatında)
    link: string;    // Yazıya erişim bağlantısı
    img: string;     // Yazıya ait görsel
  }
  
  export type PostState = {
    [x: string]: any;
    posts: Post[]; // Posts dizisi
  };
  
  const initialState: PostState = {
    posts: [], // Başlangıç durumu
  };
  
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload; // Postları güncelle
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
