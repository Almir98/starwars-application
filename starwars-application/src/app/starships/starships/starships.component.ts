import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/_services/films.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  data:any;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getAllStarShips();
  }

  getAllStarShips()
  {
    this.filmsService.getAllStarShips().subscribe(responseData =>{

      this.data = responseData;
      console.log(this.data);
    });
  }
}
