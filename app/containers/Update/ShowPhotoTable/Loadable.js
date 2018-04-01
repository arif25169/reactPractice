/**
 *
 * Asynchronously loads the component for ShowPhotoTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
