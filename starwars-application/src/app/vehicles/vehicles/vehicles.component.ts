import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/_services/films.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  data:any;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles()
  {
    this.filmsService.getAllVehicles().subscribe(responseData =>{

      this.data = responseData;
      console.log(this.data);
    });
  }

}
