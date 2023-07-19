import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'loader',
    loadComponent: () =>
      import('./loader/loader.page').then((m) => m.LoaderPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'nutrition',
    loadComponent: () =>
      import('./nutrition/nutrition.page').then((m) => m.NutritionPage),
  },
  {
    path: 'recipes',
    loadComponent: () =>
      import('./recipes/recipes.page').then((m) => m.RecipesPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.page').then((m) => m.RegisterPage),
  },
];
