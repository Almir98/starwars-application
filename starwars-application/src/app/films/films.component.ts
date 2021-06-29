import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../_services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
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
      console.log(this.data.results);
    }, error =>{

      console.log(error);
    })
  }
}
