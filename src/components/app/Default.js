import React from 'react';

import { Link, safePrefix } from '../../utils';

const Default = props => {
  return (
    <div>
      <h1>App Dashboard</h1>
      <Link to={safePrefix('/app/login')}>Login</Link>
    </div>
  );
};

export default Default;
