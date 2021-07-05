import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class FilmsService {

  apiURL = environment.baseUrl + "/films";

constructor(private http: HttpClient) { }

getAllFilms(){
    return this.http.get(environment.baseUrl + "/films");
}

getAllPeople(){
  return this.http.get(environment.baseUrl + "/people");
}

getAllPlanets(){
  return this.http.get(environment.baseUrl + "/planets");
}

getAllSpecies(){
  return this.http.get(environment.baseUrl + "/species");
}

getAllStarShips(){
  return this.http.get(environment.baseUrl + "/starships");
}

getAllVehicles(){
  return this.http.get(environment.baseUrl + "/vehicles");
}

}
