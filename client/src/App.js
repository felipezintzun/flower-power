import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Intro from './pages/intro/Intro.js';
import Thoughts from './pages/thoughts/Thoughts.js';
import Contact from './pages/contact/Contact.js';
import GalleryList from './components/galleryList/GalleryList.js';
import Footer from './components/footer/Footer.js';
import Login from './pages/login/Login.js';
import NoMatch from './pages/noMatch/NoMatch.js';
import SingleThought from './pages/SingleThought/SingleThought.js';
import Profile from './pages/profile/Profile.js';
import Signup from './pages/signup/Signup.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
    <Router>

    <div clasName="flex-column justify-flex-start min-100-vh">
      <Navigation />
      
      <div className="container">

      <Switch>

      <Route exact path="/" component={Intro} />
      <Route exact path="/thoughts" component={Thoughts} />
      <Route exact path="/gallerylist" component={GalleryList} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile/:username?" component={Profile} />
      <Route exact path="/thought/:id" component={SingleThought} />

      <Route component={NoMatch} />
      </Switch>

      </div>

      <Footer />
    </div>

    </Router>
    </ApolloProvider>
  );
}

export default App;
