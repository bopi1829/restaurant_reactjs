/*
 * MenuPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Table from 'components/Table';
import messages from './messages';
import Img from './Img';
import Plat from './plat.jpg';

import MenuTable from './menu.js';
import NavBarMenu from '../../components/NavBar';

export default function MenuPage() {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
        <meta
          name="description"
          content="Page du menu"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <NavBarMenu />
      <Img src={Plat} alt="Plat, restaurant La Bonne Table" />
      <Table>
        <MenuTable />
      </Table>
    </div>
  );
}
