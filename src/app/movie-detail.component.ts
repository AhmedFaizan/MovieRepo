import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  @Input()
  movie: Movie;
  constructor(
    private MovieService: MovieService,
    private route: ActivatedRoute) {

    }

ngOnInit(): void {
this.route.params.forEach((params: Params) =>{
let id = +params['id'];
this.MovieService.getMovie(id)
.then(movie => this.movie = movie);
});
}

save(): void{
  this.MovieService.update(this.movie)
  .then(this.goBack)
}
goBack(): void{
  window.history.back();
}
}
