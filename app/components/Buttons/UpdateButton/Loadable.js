/**
 *
 * Asynchronously loads the component for UpdateButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
