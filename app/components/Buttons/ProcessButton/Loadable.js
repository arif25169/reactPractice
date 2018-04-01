/**
 *
 * Asynchronously loads the component for ProcessButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
