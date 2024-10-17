// src/redux/actions/fetchPosts.ts
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setPosts } from '../slices/postSlice'; // setPosts action'ını import et
import { AppDispatch } from '../store';

const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    const postsCollection = collection(db, "posts");
    console.log("Firestore bağlantısı başarılı.");
    const postSnapshot = await getDocs(postsCollection);
    
    // Firestore'dan gelen veriyi yapılandırıyoruz
    const postList = postSnapshot.docs.map((doc, index) => ({
      id: index + 1, // Benzersiz id oluşturma (index + 1 ile 1'den başlatıyoruz)
      title: doc.data().title || '',      // Yazı başlığı
      content: doc.data().content || '',  // Yazı içeriği
      author: doc.data().author || '',    // Yazı yazarı
      date: doc.data().date || '',        // Yazının yayımlanma tarihi
      category: doc.data().category || '',// Yazı kategorisi
      link: doc.data().link || '',        // Yazıya erişim bağlantısı
      img: doc.data().img || '',          // Yazıya ait görsel
    }));
  
    console.log(postList);
    dispatch(setPosts(postList)); 
  } catch (error) {
    console.error("Firebase bağlantı hatası:", error); 
  }
};

export default fetchPosts;