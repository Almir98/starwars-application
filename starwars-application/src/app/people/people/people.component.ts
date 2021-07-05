import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/_services/films.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  data: any;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllPeople();

  }

  getAllPeople()
  {
    this.filmsService.getAllPeople().subscribe(responseData =>{

      this.data = responseData;

      console.log(this.data);
    });

}
}