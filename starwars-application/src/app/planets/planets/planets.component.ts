import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/_services/films.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  data: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllPlantes();
  }

  getAllPlantes()
  {
    this.filmsService.getAllPlanets().subscribe(responseData =>{

      this.data = responseData;
      console.log(this.data);
    });
  }
  
}
