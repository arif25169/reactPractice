/**
 *
 * Asynchronously loads the component for Tutorial
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
