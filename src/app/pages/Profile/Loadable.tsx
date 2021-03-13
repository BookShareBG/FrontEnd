/**
 * Asynchronously loads the component for Login
 */

import { lazyLoad } from 'utils/loadable';

export const Profile = lazyLoad(
  () => import('./index'),
  module => module.Profile,
);
