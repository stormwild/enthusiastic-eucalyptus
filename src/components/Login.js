import React from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Link } from '@reach/router';
import { safePrefix, htmlToReact } from '../utils';
import * as Yup from 'yup';

const Login = props => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
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
            <form
              name="loginForm"
              method="POST"
              id="login-form"
              className="login-form"
              action="/login"
            >
              <p className="screen-reader-text">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div className="form-row">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="form-errors">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="form-row">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="form-errors">{formik.errors.password}</div>
                ) : null}
              </div>

              <input type="hidden" name="form-name" value="loginForm" />
              <div className="form-row form-submit">
                <button type="submit" className="button">
                  Login
                </button>
              </div>
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
