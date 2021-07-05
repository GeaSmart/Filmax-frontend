import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit {

  @Input()
  titulo:string='';

  constructor() { }
  ngAfterViewInit(): void {
    console.log('on ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('on ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('on ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on ngOnChanges');
  }
  ngOnInit(): void {
    console.log('on ngOnInit ' + this.titulo);
  }
}
