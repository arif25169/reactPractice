/**
 *
 * Asynchronously loads the component for StudentListForActiveInactive
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
