import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../H1'
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Restaurant from './restaurant.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <H1>La Bonne Table</H1>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/menu">
          <FormattedMessage {...messages.menu} />
        </HeaderLink>
        <HeaderLink to="/contact">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
      </NavBar>
      <Img src={Restaurant} alt="La Bonne Table - Bannière" />
    </div>
  );
}

export default Header;
