// Post arayüzü
export interface Post {
  id: string; // Yazının benzersiz kimliği
  title: string; // Yazı başlığı
  content: string; // Yazı içeriği
  author: string; // Yazı yazarı
  date: string; // Yazının yayımlanma tarihi (ISO formatında)
  category: string; // Yazı kategorisi
  link: string; // Yazıya erişim bağlantısı
  img: string; // Yazıya ait görsel
}

