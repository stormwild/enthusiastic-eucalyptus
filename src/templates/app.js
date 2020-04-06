import React from 'react';
import { Router } from '@reach/router';
import { Layout } from '../components/index';
import { Default } from '../components/app';

const App = props => {
  return (
    <Layout {...props}>
      <Router basepath="/app">
        <Default path="/" />
      </Router>
    </Layout>
  );
};

export default App;
