/**
 *
 * Asynchronously loads the component for UpdateCategoryInfo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
