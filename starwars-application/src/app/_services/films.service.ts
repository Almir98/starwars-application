import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Film } from '../_models/film';

@Injectable()
export class FilmsService {

  apiURL = environment.baseUrl + "/films";

constructor(private http: HttpClient) { }

getAllFilms():Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
}

}
