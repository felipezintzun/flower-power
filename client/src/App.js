import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Intro from './pages/intro/Intro.js';
import Thoughts from './pages/thoughts/Thoughts.js';
import Contact from './pages/contact/Contact.js';
import GalleryList from './components/galleryList/GalleryList.js';
import Footer from './components/footer/Footer.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>

    <div>
      <Navigation />
      
      <Intro />
      <Thoughts />
      
      
      <GalleryList />
      
      <Contact />
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
