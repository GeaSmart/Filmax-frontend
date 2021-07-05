import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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
  @Output()
  rated: EventEmitter<number>=new EventEmitter<number>();
  
  maxRatingArray: number[] = [];
  haVotado=false;

  

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
    
  }

  manejarMouseEnter(indice:number){
    if(!this.haVotado)
    this.selectedRating = indice+1;
    //console.log(this.selectedRating);
  }

  manejarMouseLeave(){
    if(!this.haVotado)
    this.selectedRating = 0;
    //console.log(this.selectedRating);
  }
  manejarRate(indice:number){
    this.selectedRating=indice+1;
    this.haVotado=true;
    console.log(this.selectedRating);
    this.rated.emit(this.selectedRating);
  }
}
