import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listadoPeliculasCine: any;
  listadoPeliculasEstreno: any;
  titulo:string='';
  ocultar = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.listadoPeliculasCine = [
        {
          titulo: 'Anaconda brava',
          sinopsis: 'Pelicula pa los que le gusta la acción',
          presupuesto: 780000.5,
          fechaEstreno: new Date('01/08/2021'),
          poster:"https://i.ytimg.com/vi/O27EHAGn3Yo/maxresdefault.jpg",
        },
        {
          titulo: 'Anaconda 3',
          sinopsis: 'Pelicula pa los que le gusta las malas pelis',
          presupuesto: 8621.5,
          fechaEstreno: new Date('01/05/2010'),
          poster:"https://www.esquireme.com/public/styles/fb_share_style_image/public/images/2020/06/01/rocky-1-documentar.jpg?itok=exheCy7r",
        },
      ];

      this.listadoPeliculasEstreno = [
        {
          titulo: 'Moana',
          sinopsis: 'Pelicula pa chibolos sanossd',
          presupuesto: 433554.99,
          fechaEstreno: new Date('01/05/2000'),
          poster:"https://static.wikia.nocookie.net/disney/images/7/7d/Profile_-_Moana.png",
        },
        {
          titulo: 'Rocky',
          sinopsis: 'Pelicula pa machos pelos en el pecho',
          presupuesto: 1500000,
          fechaEstreno: new Date('02/05/2000'),
          poster:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-rocky-ii-1563982867.jpg",
        },
      ];
    }, 1000);
  }

  //strings
  tema = 'front-end';
  autor: string = 'developer';

  //numeros
  edad = 55;
  peso: number = 33.55;

  //arrays
  productos = [
    {
      id: 1,
      nombre: 'zapato',
      precio: 50.0,
    },
    {
      id: 2,
      nombre: 'camisa',
      precio: 33,
      observaciones: 'producto fallado',
    },
  ];

  //boolean
  isDone: boolean = true;
  isFixed = false;

  //Fechas
  fechaNacimiento: Date = new Date('01/31/2000'); //MMddyyyy
  fechaMatricula = new Date('12/20/2000');

  //objetos complejos
  pelicula = {
    titulo: 'Spider man',
    fechaLanzamiento: new Date(),
    presupuesto: 1500000,
  };

  manejarClick() {
    const IGV = 0.19;
    var edad = 56;
    let nombre = 'Gerson';
    let listado = this.calcularSuma(4, 5); //resultado de una funcion
    nombre = 'd';
    // listado.forEach(element => {
    //   alert(element.toString());
    // });
    return nombre;
  }

  calcularSuma(a: number, b: number) {
    return a + b;
  }

  manejarRated(voto:number){
    alert(voto);
  }

  manejarTarget(e){
    this.titulo = e.target.value;
  }
}