import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';


import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { routing } from './app.routing';
import { MovieService } from './movie.service';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent }     from './movies.component';
import { DashboardComponent } from './dashboard.component';
import { MovieSearchComponent } from './movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesComponent,
    DashboardComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
