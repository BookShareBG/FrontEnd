/**
 * Asynchronously loads the component for Login
 */

import { lazyLoad } from 'utils/loadable';

export const Book = lazyLoad(
  () => import('./index'),
  module => module.Book,
);
