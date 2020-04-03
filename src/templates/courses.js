import React from 'react';
import { Layout } from '../components/index';
import { Link, safePrefix } from '../utils';

const Courses = props => {
  const {
    pageContext: { courses },
  } = props;

  return (
    <Layout {...props}>
      <div className="outer">
        <div className="inner">
          <div className="post-feed">
            {courses.map(({ _id, slug, title, description, category, fee }) => (
              <article key={_id} className="post post-card">
                <div className="post-card-inside">
                  {/* {photo && (
                    <Link className="post-card-thumbnail" to={safePrefix(slug)}>
                      <img className="thumbnail" src={safePrefix(photo)} alt={name} />
                    </Link>
                  )} */}
                  <div className="post-card-content">
                    <header className="post-header">
                      <h2 className="post-title">
                        <Link to={safePrefix(slug)} rel="bookmark">
                          {title}
                        </Link>
                      </h2>
                    </header>
                    <div className="post-excerpt">
                      <p>{description.substring(0, 200)}</p>
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

export default Courses;
