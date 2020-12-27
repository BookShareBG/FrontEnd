import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';

export function Login({ history, location }) {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  function onSubmit({ email, password }, { setSubmitting }) {
    // alertService.clear();
    // accountService
    //   .login(email, password)
    //   .then(() => {
    //     const { from } = location.state || { from: { pathname: '/' } };
    //     history.push(from);
    //   })
    //   .catch(error => {
    //     setSubmitting(false);
    //     alertService.error(error);
    //   });
    console.log(email, password);
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="A BookShareBG login page" />
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <h3 className="card-header">Login</h3>
            <div className="card-body">
              <div className="form-group">
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? 'is-invalid' : '')
                  }
                ></Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? 'is-invalid' : '')
                  }
                ></Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Login
                  </button>
                  <Link to="register" className="btn btn-link pr-0">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
