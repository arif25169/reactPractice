/**
 *
 * Asynchronously loads the component for StudentListForCategory
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
