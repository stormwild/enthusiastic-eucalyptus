import React from 'react';
import { Router } from '@reach/router';
import { Layout } from '../components/index';
import { Default, Login } from '../components/app';
import { Link, safePrefix } from '../utils';

const App = props => {
  return (
    <Layout {...props}>
      <Router basepath="/app">
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};

export default App;
