import { Post } from "./blog"; // Post arayüzünü import et
import mangaImg from "../../../assets/content-1.png"
// Gündem yazıları
 const Gundem: Post[] = [
  {
    id: '5',
    title: 'Haberler',
    content: 'Günün en sıcak haberleri',
    author: 'Ali Sönmez',
    date: '2024-10-03',
    category: 'Gundem',
    link: '/gundem',
    img: mangaImg,
  },
  // Diğer Gündem yazıları...
];
export default Gundem