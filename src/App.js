import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js';
import Gallery from './components/gallery/Gallery.js';
import GalleryList from './components/galleryList/GalleryList.js';
import Footer from './components/footer/Footer.js';



function App() {
  return (

    <div>
      <Navigation />

      <Home />
      <Contact />
      <Gallery />
      <GalleryList />

      <Footer />
    </div>
  );
}

export default App;
