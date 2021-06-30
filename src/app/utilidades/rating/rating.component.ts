import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  
  maxRatingArray: number[] = [];

  

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  manejarMouseEnter(indice:number){
    this.selectedRating = indice+1;
    console.log(this.selectedRating);
  }

  manejarMouseLeave(){
    this.selectedRating = 0;
    console.log(this.selectedRating);
  }
}
