//THIS LOADS DATA INTO INDEX.HTML my-movies directive
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from './movie';
import { MovieService } from './movie.service';

//component is equavalent to controller or a class
@Component({
  selector: 'my-movies',// this selects the directive in index.html
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']



})
export class MoviesComponent implements OnInit{

  movies:Movie[];
  selectedMovie: Movie;
  constructor(
              private MovieService: MovieService,
              private router: Router) { }
  ngOnInit(): void {
    this.getMovies();
    }
getMovies(): void {
  this.MovieService.getMovies().then(movies => this.movies = movies);
}
onSelect(movie: Movie): void {
this.selectedMovie = movie;
}
gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedMovie.id]);
}
delete(movie: Movie): void {
  this.MovieService
  .delete(movie.id)
  .then(() => {
    this.movies = this.movies.filter(h => h !== movie);
    if (this.selectedMovie === movie) {this.selectedMovie = null;
    }
  });
}

/*add movie*/
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.MovieService.create(name)
    .then(movie => {
      this.movies.push(movie);
      this.selectedMovie = null;
    });
}

/*add movie*/
}
