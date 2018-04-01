/**
 *
 * Asynchronously loads the component for Youtube
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
