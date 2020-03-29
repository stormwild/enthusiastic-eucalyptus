import React from 'react';
import { Layout } from '../components/index';
import { Link, safePrefix } from '../utils';

const Faculty = props => {
  const {
    pageContext: { instructors },
  } = props;
  return (
    <Layout {...props}>
      <div className="outer">
        <div className="inner">
          <div className="post-feed">
            {instructors.map(({ _id, name, photo, excerpt, slug }) => (
              <article key={_id} className="post post-card">
                <div className="post-card-inside">
                  {photo && (
                    <Link className="post-card-thumbnail" to={safePrefix(slug)}>
                      <img className="thumbnail" src={safePrefix(photo)} alt={name} />
                    </Link>
                  )}
                  <div className="post-card-content">
                    <header className="post-header">
                      <h2 className="post-title">
                        <Link to={safePrefix(slug)} rel="bookmark">
                          {name}
                        </Link>
                      </h2>
                    </header>
                    <div className="post-excerpt">
                      <p>{excerpt}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;
