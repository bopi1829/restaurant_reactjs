/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  adresseMessage: {
    id: `${scope}.adresseMessage`,
    defaultMessage: 'La Bonne Table, 2 Rue des gourmands 30000 Nîmes'
  },
  creatorMessage: {
    id: `${scope}.creatorMessage`,
    defaultMessage: 'Site créé par {author}'
  },
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
