import React from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <h3 className="title">
        Hello From APP
      </h3>
      <LandingPage />
    </ApolloProvider>
  );
};
