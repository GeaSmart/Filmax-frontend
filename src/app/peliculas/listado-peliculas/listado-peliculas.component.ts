import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.listadoPeliculas = [
      {
        titulo: 'Moana',
        sinopsis: 'Pelicula pa chibolos sanoss',
        presupuesto: 433554.99,
      },
      {
        titulo: 'Rocky',
        sinopsis: 'Pelicula pa machos pelos en el pecho',
        presupuesto: 1500000,
      },
      {
        titulo: 'Gol',
        sinopsis: 'Pelicula pa peloteros entusiastas',
        presupuesto: 500000,
      },
      {
        titulo: 'Anaconda brava',
        sinopsis: 'Pelicula pa los que le gusta la acción',
        presupuesto: 780000.5,
      },
      {
        titulo: 'Anaconda 2',
        sinopsis: 'Pelicula pa los que le gusta las malas pelis',
        presupuesto: 8621.5,
      },
    ];
  }

  listadoPeliculas:any;

}
