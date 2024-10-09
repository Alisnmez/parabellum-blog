import footballImg from "../../../assets/content-1.png";
import { Post } from "./blog"; // Post arayüzünü import et

// Futbol yazıları
 const footballPosts: Post[] = [
  {
    id: '4',
    title: 'Futbolun En İyi 10 Oyuncusu',
    content: 'Futbol dünyasının en iyilerini keşfedin',
    author: 'Ali Sönmez',
    date: '2024-10-03',
    category: 'Futbol',
    link: '/futbol-en-iyi-10',
    img: footballImg,
  },
  
  // Diğer futbol yazıları...
];
export default footballPosts