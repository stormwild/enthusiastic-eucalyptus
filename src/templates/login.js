import React from 'react';
import { Layout, Login } from '../components/index';

const App = props => {
  return (
    <Layout {...props}>
      <Login {...props} />
    </Layout>
  );
};

export default App;
