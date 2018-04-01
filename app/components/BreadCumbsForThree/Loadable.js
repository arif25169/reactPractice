/**
 *
 * Asynchronously loads the component for BreadCumbs
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
