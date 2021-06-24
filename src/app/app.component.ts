import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  titulo:string = "d";

  body='Gerson Azabache';

  manejarClick(){
    alert("heyy");

    let listado = this.calcularSuma();
    
    listado.forEach(element => {
      alert(element.toString());      
    });
  }

  calcularSuma(){
    return [2,3,5];    
  }
}
