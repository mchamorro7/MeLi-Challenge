import React from 'react';

const itemsComponent = React.lazy(() => import('./features/items'));
const itemComponent = React.lazy(() => import('./features/items/Detail'));
const homeComponent = React.lazy(() => import('./features/home'));
const notFoundComponent = React.lazy(() => import('./common/NotFound'));

const routes = [
  { path: '/', exact: true, component: homeComponent },
  { path: '/items', exact: true, component: itemsComponent },
  { path: '/items/:id', exact: false, component: itemComponent },
  { component: notFoundComponent },
];

export default routes;
