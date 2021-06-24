import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-ends';

  titulo:string = "d";

  body='Gerson Azabache';

  pelicula = {
    titulo:'Spider man',
    fechaLanzamiento: new Date(),
    presupuesto: 1500000
  };

  listadoPeliculas = [
    {
      titulo:'Moana',
      sinopsis: 'Pelicula pa chibolos sanos',
      presupuesto: 433554.99    
    },
    {
      titulo:'Rocky',
      sinopsis: 'Pelicula pa machos pelos en el pecho',
      presupuesto: 1500000
    },
    {
      titulo:'Gol',
      sinopsis: 'Pelicula pa peloteros entusiastas',
      presupuesto: 500000
    },
    {
      titulo:'Anaconda brava',
      sinopsis: 'Pelicula pa los que le gusta la acción',
      presupuesto: 780000.50
    },
  ];

  manejarClick(){
    alert("heyy");

    let listado = this.calcularSuma(4,5);    
    
    // listado.forEach(element => {
    //   alert(element.toString());      
    // });
  }

  calcularSuma(a:number, b:number){
    return a+b;
  }
}
