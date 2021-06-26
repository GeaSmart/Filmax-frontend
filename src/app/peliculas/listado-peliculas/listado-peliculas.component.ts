import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input()
  peliculas:any;

  constructor() { }

  ngOnInit(): void {
    
  }

  remover(indice:number){
    this.peliculas.splice(indice,1);
  }
}
