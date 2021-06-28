import { Routes } from "@angular/router";
import { FilmsComponent } from "./films/films.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    {path:'all-films',component: FilmsComponent},


    //{ path: 'city-id/:id', component: WeatherDetailsComponent},

    {path:'**',component: HomeComponent,pathMatch:'full'}
]