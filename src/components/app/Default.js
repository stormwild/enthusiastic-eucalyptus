import React from 'react';
import _ from 'lodash';
import { Link, safePrefix, htmlToReact } from '../../utils';

const Default = props => {
  return (
    <div className="outer">
      <div className="inner-medium">
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">
              {_.get(props, 'pageContext.frontmatter.title') || 'Dashboard'}
            </h1>
          </header>
          {_.get(props, 'pageContext.frontmatter.img_path') && (
            <div className="post-thumbnail">
              <img
                src={safePrefix(_.get(props, 'pageContext.frontmatter.img_path'))}
                alt={_.get(props, 'pageContext.frontmatter.title')}
              />
            </div>
          )}
          {_.get(props, 'pageContext.frontmatter.subtitle') && (
            <div className="post-subtitle">
              {htmlToReact(_.get(props, 'pageContext.frontmatter.subtitle'))}
            </div>
          )}
          <div className="post-content">{htmlToReact(_.get(props, 'pageContext.html'))}</div>
        </article>
      </div>
    </div>
  );
};

export default Default;
