/**
 *
 * Asynchronously loads the component for DownloadButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
