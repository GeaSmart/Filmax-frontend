import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit {

  @Input()
  titulo:string='';


  timer:ReturnType<typeof setInterval>;

  constructor() { }
  ngAfterViewInit(): void {
    console.log('on ngAfterViewInit');
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
  }
}
