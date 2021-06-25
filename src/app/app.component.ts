import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {

    }, 500);
  }

  //strings
  tema = 'front-end';
  autor: string = 'developer';  

  //numeros
  edad=55;
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
  fechaNacimiento: Date = new Date('01/31/2000');//MMddyyyy
  fechaMatricula = new Date('12/20/2000');

  //objetos complejos
  pelicula = {
    titulo: 'Spider man',
    fechaLanzamiento: new Date(),
    presupuesto: 1500000,
  };

  listadoPeliculas:any;

  manejarClick() {
    const IGV = 0.19;
    var edad = 56;
    let nombre = 'Gerson';
    let listado = this.calcularSuma(4, 5);//resultado de una funcion
    nombre='d';
    // listado.forEach(element => {
    //   alert(element.toString());
    // });
    return nombre;
  }

  calcularSuma(a: number, b: number) {
    return a + b;
  }
}
