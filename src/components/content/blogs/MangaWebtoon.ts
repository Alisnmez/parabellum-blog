import mangaImg from "../../../assets/content-1.png";
import { Post } from "./blog"; 

// Manga yazıları
const MangaWebtoonPosts: Post[] = [
  {
    id: '1',
    title: 'Manga Dünyasının En İyi 10 Serisi',
    content: 'Manga dünyasındaki en popüler serileri keşfedin',
    author: 'Ali Sönmez',
    date: '2024-10-01',
    category: 'Manga & Webtoon',
    link: '/manga-en-iyi-10',
    img: mangaImg,
  },
  // Diğer manga yazıları...
];
export default MangaWebtoonPosts;