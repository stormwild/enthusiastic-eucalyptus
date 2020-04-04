import React from 'react';
import _ from 'lodash';
import { Link } from '@reach/router';
import { safePrefix, htmlToReact } from '../../utils';

const Login = props => {
  return (
    <div className="outer">
      <div className="inner-medium">
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">
              {_.get(props, 'pageContext.frontmatter.title') || 'Login'}
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
          <div className="post-content">
            <form name="loginForm" method="POST" id="login-form" className="login-form">
              <p className="screen-reader-text">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <p className="form-row">
                <label className="form-label">Username</label>
                <input type="text" name="name" className="form-input" />
              </p>
              {/* <p className="form-row">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-input" />
              </p> */}
              <p className="form-row">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-input" />
              </p>

              <input type="hidden" name="form-name" value="loginForm" />
              <p className="form-row form-submit">
                <button type="submit" className="button">
                  Login
                </button>
              </p>
            </form>
          </div>
        </article>
        <Link to="/" className="button secondary">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Login;
