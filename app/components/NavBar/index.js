import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function NavBarMenu () {
    return (
        <div>
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
        </div>
    )
}

export default NavBarMenu;
