import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

private moviesUrl = 'app/movies'; // mock api

constructor ( private http: Http) {}

  getMovie(id: number): Promise<Movie> {
    return this.getMovies()
    .then(movies => movies.find(movie => movie.id === id));
  }
  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
    .toPromise()
    .then(response => response.json().data as Movie[])
    .catch(this.handleError);
  }

private headers = new Headers({'Content-Type': 'application/json'});
update(movie: Movie): Promise<Movie>{
  const url = `${this.moviesUrl}/${movie.id}`;
  return this.http
  .put(url, JSON.stringify(movie), {headers: this.headers})
  .toPromise()
    .then(() => movie)
    .catch (this.handleError);

}

delete(id: number): Promise<void> {
  let url = `${this.moviesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
  .toPromise()
  .then(() => null)
  .catch(this.handleError);
}

create(name: string): Promise<Movie> {
  return this.http
    .post(this.moviesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}


private handleError(error: any): Promise<any>{
  console.error('An error occured', error); //demo only
return Promise.reject (error.message || error);
}

}
