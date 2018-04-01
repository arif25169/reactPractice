/**
 *
 * Asynchronously loads the component for StudentListForSection
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
