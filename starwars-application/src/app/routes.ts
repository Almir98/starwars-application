import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FilmsComponent } from "./film/films/films.component";
import { FilmDetailComponent } from './film/films/filmDetail/filmDetail.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { PlanetDetailsComponent } from './planets/planetDetails/planetDetails.component';
import { PeopleComponent } from "./people/people/people.component";
import { PeopleDetailComponent } from "./people/peopleDetail/peopleDetail.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    {path:'films',component: FilmsComponent},
    { path: 'film-details/:id', component: FilmDetailComponent},
    {path:'people',component: PeopleComponent},
    { path: 'people-details/:id', component: PeopleDetailComponent},
    {path:'planets',component: PlanetsComponent},
    { path: 'planets-details/:id', component: PlanetDetailsComponent},

    
    {path:'**',component: HomeComponent,pathMatch:'full'}
]