import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setPosts } from '../slices/postSlice'; // setPosts action'ını import et
import { AppDispatch } from '../store'; // Redux store'unuzun türü

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    const postsCollection = collection(db, "posts");
    console.log("Firestore bağlantısı başarılı.");
    const postSnapshot = await getDocs(postsCollection);
    const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
    console.log(postList);
    dispatch(setPosts(postList)); 
  } catch (error) {
    console.error("Firebase bağlantı hatası:", error); 
  }
  
};

