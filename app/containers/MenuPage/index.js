/*
 * MenuPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

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
    </div>
  );
}
