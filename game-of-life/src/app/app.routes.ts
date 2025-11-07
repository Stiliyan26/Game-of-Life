import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/game-of-life/game-of-life.page').then(
        (m) => m.GameOfLifePageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
