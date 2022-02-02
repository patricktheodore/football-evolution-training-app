import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import AboutUs from './components/AboutUs'
import AppBar from './components/AppBar';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import TrainWithUs from './pages/TrainWithUs';

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
        <div>
          <StoreProvider>
            <AppBar />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/aboutUs" element={<AboutUs />} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/trainWithUs" element={<TrainWithUs />} />
              <Route element={<NoMatch/>} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
