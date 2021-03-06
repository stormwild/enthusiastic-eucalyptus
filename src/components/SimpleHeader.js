import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SimpleHeader = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

SimpleHeader.propTypes = {
  siteTitle: PropTypes.string
};

SimpleHeader.defaultProps = {
  siteTitle: ``
};

export default SimpleHeader;
