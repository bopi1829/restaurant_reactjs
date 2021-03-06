/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MenuPage from 'containers/MenuPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
//import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background-color: lightgrey;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Restaurant La Bonne Table"
        defaultTitle="Restaurant La Bonne Table, cuisine traditionnelle française sur Nîmes"
      >
        <meta name="description" content="Restaurant La Bonne Table, cuisine traditionnelle française sur Nîmes" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
