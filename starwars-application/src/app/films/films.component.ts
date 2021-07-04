import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../_services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  data: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms()
  {
    this.filmsService.getAllFilms().subscribe(responseData =>{

      this.data = responseData;
    });
  }
}
