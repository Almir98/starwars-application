import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FilmsComponent } from "./film/films/films.component";
import { FilmDetailComponent } from './film/films/filmDetail/filmDetail.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { PlanetDetailsComponent } from './planets/planetDetails/planetDetails.component';

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    {path:'films',component: FilmsComponent},
    { path: 'film-details/:id', component: FilmDetailComponent},
    {path:'people',component: FilmsComponent},
    { path: 'people-details/:id', component: FilmDetailComponent},
    {path:'planets',component: PlanetsComponent},
    { path: 'planets-details/:id', component: PlanetDetailsComponent},

    
    {path:'**',component: HomeComponent,pathMatch:'full'}
]