import { Routes } from '@angular/router';
import { Shell } from './core/layout/shell/shell';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
