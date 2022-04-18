import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Home from './pages/home/Home.js';
import Contact from './pages/contact/Contact.js';
import GalleryList from './components/galleryList/GalleryList.js';
import Footer from './components/footer/Footer.js';




function App() {
  return (

    <div>
      <Navigation />

      <Home />
      
      
      <GalleryList />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
