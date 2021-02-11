/*
 * ContactPage Messages
 *
 * This contains all the text for the ContactPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ContactPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Contact',
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage: "Retour à l'accueil | ",
  },
});
