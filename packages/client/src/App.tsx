import React from 'react';
import LandingPage from './components/LandingPage/';
import TopNavBar from './components/TopNavBar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <TopNavBar />
      <LandingPage />
    </ApolloProvider>
  );
};
