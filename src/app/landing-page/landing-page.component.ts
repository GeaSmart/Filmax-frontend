import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  listadoPeliculasCine: any;
  listadoPeliculasEstreno: any;
  
  constructor() { }

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

}
