import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { safePrefix } from '../utils';

const Course = props => {
  const {
    pageContext: {
      course: { title, description, category, fee },
    },
  } = props;
  return (
    <Layout {...props}>
      <div className="outer">
        <div className="inner-medium">
          <article className="post post-full">
            <header className="post-header">
              <h1 className="post-title">{title}</h1>
            </header>
            {/* {photo && (
              <div className="post-thumbnail">
                <img src={safePrefix(photo)} alt={title} />
              </div>
            )} */}
            <div className="post-content">{description}</div>
            <footer className="post-meta">
              <span>{category.name}</span>
              <span>{fee}</span>
            </footer>
          </article>
        </div>
      </div>
    </Layout>
  );
};
export default Course;
