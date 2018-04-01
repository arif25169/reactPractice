/**
 *
 * Asynchronously loads the component for StudentStatus
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
