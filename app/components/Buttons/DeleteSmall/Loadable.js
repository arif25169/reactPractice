/**
 *
 * Asynchronously loads the component for DeleteSmall
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
