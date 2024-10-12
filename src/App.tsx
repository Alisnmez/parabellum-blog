import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import MangaWebtoon from './pages/MangaWebtoon';
import Futbol from './pages/Futbol';
import Finans from './pages/Finans';
import FilmDizi from './pages/FilmDizi';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=''>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangawebtoon" element={<MangaWebtoon />} />
        <Route path="/futbol" element={<Futbol />} />
        <Route path="/finans" element={<Finans />} />
        <Route path="/filmdizi" element={<FilmDizi />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
