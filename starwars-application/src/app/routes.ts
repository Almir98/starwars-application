import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FilmsComponent } from "./film/films/films.component";
import { FilmDetailComponent } from './film/films/filmDetail/filmDetail.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { PlanetDetailsComponent } from './planets/planetDetails/planetDetails.component';
import { PeopleComponent } from "./people/people/people.component";
import { PeopleDetailComponent } from "./people/peopleDetail/peopleDetail.component";

import { SpeciesComponent } from './species/species/species.component';
import { SpeciesDetailComponent } from './species/speciesDetail/speciesDetail.component';
import { StarshipsComponent } from "./starships/starships/starships.component";
import { StarshipsDetailsComponent } from "./starships/starshipsDetails/starshipsDetails.component";
import { VehiclesComponent } from "./vehicles/vehicles/vehicles.component";
import { VehicleDetailsComponent } from "./vehicles/vehicles/vehicleDetails/vehicleDetails.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    {path:'films',component: FilmsComponent},
    { path: 'film-details/:id', component: FilmDetailComponent},
    {path:'people',component: PeopleComponent},
    { path: 'people-details/:id', component: PeopleDetailComponent},
    {path:'planets',component: PlanetsComponent},
    { path: 'planets-details/:id', component: PlanetDetailsComponent},
    {path:'species',component: SpeciesComponent},
    { path: 'species-details/:id', component: SpeciesDetailComponent},
    {path:'starships',component: StarshipsComponent},
    { path: 'starships-details/:id', component: StarshipsDetailsComponent},
    {path:'vehicles',component: VehiclesComponent},
    { path: 'vehicles-details/:id', component: VehicleDetailsComponent},
    {path:'**',component: HomeComponent,pathMatch:'full'}
]