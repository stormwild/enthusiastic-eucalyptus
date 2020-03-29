import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { safePrefix } from '../utils';

const Instructor = props => {
  const {
    pageContext: {
      instructor: { name, photo, bio },
    },
  } = props;
  return (
    <Layout {...props}>
      <div className="outer">
        <div className="inner-medium">
          <article className="post post-full">
            <header className="post-header">
              <h1 className="post-title">{name}</h1>
            </header>
            {photo && (
              <div className="post-thumbnail">
                <img src={safePrefix(photo)} alt={name} />
              </div>
            )}
            <div className="post-content">{bio}</div>
          </article>
        </div>
      </div>
    </Layout>
  );
};
export default Instructor;
