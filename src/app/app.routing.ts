import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MoviesComponent }      from './movies.component';
import { DashboardComponent } from './dashboard.component';
import { MovieDetailComponent } from './movie-detail.component';

const appRoutes: Routes =[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
