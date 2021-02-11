import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.adresseMessage} />
      </section>
      <section>
        <FormattedMessage
          {...messages.creatorMessage}
          values={{
            author: <A href="https://agencepbweb.com/">Agence PB Web</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
