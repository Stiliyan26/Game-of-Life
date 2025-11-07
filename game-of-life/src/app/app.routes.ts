import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/game-of-life/components/game-of-life-page/game-of-life-page.component').then(
        (m) => m.GameOfLifePageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
