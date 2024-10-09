import financePosts from "./blogs/Finans";
import footballPosts from "./blogs/Futbol";
import Gundem from "./blogs/Gundem";
import mangaPosts from "./blogs/MangaWebtoon"
import filmPosts from "./blogs/FilmDizi"

const getRandomPost = (posts: string | any[]) => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    return posts[randomIndex];
  };
const Card = () => {
    const randomMangaPost = getRandomPost(mangaPosts);
    const randomFinancePost = getRandomPost(financePosts);
    const randomFootballPost = getRandomPost(footballPosts);
    const randomFilmPost = getRandomPost(filmPosts);
    const randomGundemPost = getRandomPost(Gundem);
  
    const heroSectionPosts = [
      randomGundemPost,
      randomMangaPost,
      randomFootballPost,
      randomFinancePost,
      randomFilmPost
    ];
  return (
    <div className="flex flex-col w-full items-center h-auto md:flex-row gap-10 p-4 ">
        {heroSectionPosts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-white w-[410px] h-[330px] rounded-xl shadow-lg overflow-hidden group"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[60%] object-cover transition-transform duration-500 transform group-hover:scale-110 "
            />
            <div className="flex flex-col items-start justify-between w-full p-2 mt-2 overflow-hidden ">
              <h1 className="font-bold w-full line-clamp-2 text-center">{post.title}</h1>
              <div className="flex items-center justify-center w-full">
                <p className="font-serif max-w-56 line-clamp-2 overflow-hidden">
                  {post.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Card