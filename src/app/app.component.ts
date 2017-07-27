import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: string;
  title = 'Livro Angular 2!';
  imgTitle:string = 'favicon.ico';
  desenvolvimento:string[] = ['Angular 2','JavaScript','TypeScript','HTML','CSS'];


  constructor(private service:AlertaService){}

  enviarMsg():void{
    this.service.msgAlerta();
  }

  valorPassado(valorPassado){
    this.valor = valorPassado;
  }

  
}
