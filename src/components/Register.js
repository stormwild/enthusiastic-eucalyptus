import React from 'react';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Link } from '@reach/router';
import * as Yup from 'yup';

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be at least 3 characters or more')
        .required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')])
        .required('Required'),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="outer">
      <div className="inner-medium">
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">Sign Up</h1>
          </header>
          <div className="post-content">
            <form
              name="loginForm"
              method="POST"
              id="login-form"
              className="login-form"
              action="/register"
              onSubmit={formik.onSubmit}
            >
              <div className="form-row">
                <label className="form-label">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
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
                <label className="form-label">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="form-errors">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="form-row">
                <label className="form-label">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="form-errors">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="form-row">
                <label className="form-label">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="form-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="form-errors">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
              <input type="hidden" name="form-name" value="loginForm" />
              <div className="form-row form-submit">
                <button type="submit" className="button">
                  Sign Up
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

export default Register;
