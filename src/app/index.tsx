/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { Login } from './auth/Login/Loadable';
import { Register } from './auth/Register/Loadable';

import { HomePage } from './pages/HomePage/Loadable';
import { Profile } from './pages/Profile/Loadable';
import { Book } from './pages/Book/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - BookShareBG"
        defaultTitle="BookShareBG"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A BookShareBG application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/register/profile" component={Profile} />
        <Route exact path="/book/add" component={Book} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
