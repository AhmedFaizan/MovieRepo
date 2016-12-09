import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie }           from './movie';
@Injectable()
export class MovieSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Movie[]> {
    return this.http
               .get(`app/movies/?name=${term}`)
               .map((r: Response) => r.json().data as Movie[]);
  }
}
