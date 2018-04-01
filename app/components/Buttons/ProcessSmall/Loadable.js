/**
 *
 * Asynchronously loads the component for ProcessSmall
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
