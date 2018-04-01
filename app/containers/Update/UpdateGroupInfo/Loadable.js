/**
 *
 * Asynchronously loads the component for UpdateGroupInfo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
