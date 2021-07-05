import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/_services/films.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  data:any;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllSpecies();
  }

  getAllSpecies()
  {
    this.filmsService.getAllSpecies().subscribe(responseData =>{

      this.data = responseData;
      console.log(this.data);
    });
  }

}
