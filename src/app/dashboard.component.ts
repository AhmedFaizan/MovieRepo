import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'my-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private MovieService: MovieService,
  private router: Router) { }

  ngOnInit(): void {
    this.MovieService.getMovies()
   .then(movies => this.movies = movies.slice(1, 5));
  }
  gotoDetail(movie: Movie): void {
let link =['/detail', movie.id];
this.router.navigate(link);
  }
 }
