import React from 'react';
import { Layout, Register } from '../components/index';

const App = props => {
  return (
    <Layout {...props}>
      <Register {...props} />
    </Layout>
  );
};

export default App;
