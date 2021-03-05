/*
 * NavBarMenu Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.accueil`,
    defaultMessage: 'Accueil',
  },
  menu: {
    id: `${scope}.menu`,
    defaultMessage: 'Menu',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  }
});
