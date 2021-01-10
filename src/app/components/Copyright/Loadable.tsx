/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Copyright = lazyLoad(
  () => import('./index'),
  module => module.Copyright,
);
