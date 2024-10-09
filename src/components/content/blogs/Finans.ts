import financeImg from "../../../assets/content-2.png";
import { Post } from "./blog"; // Post arayüzünü import et

// Finans yazıları
const financePosts: Post[] = [
  {
    id: '2',
    title: 'Yatırım Yapmanın 5 Altın Kuralı',
    content: 'Finansal geleceğinizi şekillendirmek için önemli ipuçları',
    author: 'Ali Sönmez',
    date: '2024-10-02',
    category: 'Finans',
    link: '/yatirim-altin-kurallar',
    img: financeImg,
  },
  // Diğer finans yazıları...
];
export default financePosts