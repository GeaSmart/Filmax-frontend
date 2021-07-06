import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit {

  @Input()
  titulo:string='';

  @ViewChild(RatingComponent)
  ratingCompo:RatingComponent;

  timer:ReturnType<typeof setInterval>;

  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    console.log('on ngAfterViewInit');
    this.ratingCompo.selectedRating = 4;
    this.changeDetectorRef.detectChanges();
  }
  ngDoCheck(): void {
    console.log('on ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('on ngOnDestroy');
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('on ngOnInit ' + this.titulo);
    this.timer=
    setInterval(()=>{
      console.log(new Date())
    },1000)
    //this.ratingCompo.selectedRating = 4;
  }
}
