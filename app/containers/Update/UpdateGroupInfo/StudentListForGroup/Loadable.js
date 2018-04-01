/**
 *
 * Asynchronously loads the component for StudentListForGroup
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
