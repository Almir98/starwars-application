import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { FilmsComponent } from './film/films/films.component';
import { FilmDetailComponent } from './film/films/filmDetail/filmDetail.component';

import { PeopleComponent } from './people/people/people.component';
import { PeopleDetailComponent } from './people/peopleDetail/peopleDetail.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { PlanetDetailsComponent } from './planets/planetDetails/planetDetails.component';

import { FilmsService } from './_services/films.service';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      HeaderComponent,
      FilmsComponent,
      FilmDetailComponent,
      PeopleComponent,
      PeopleDetailComponent,
      PlanetsComponent,
      PlanetDetailsComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    FilmsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
