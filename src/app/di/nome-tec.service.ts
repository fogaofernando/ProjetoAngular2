import { Injectable } from '@angular/core';

@Injectable()
export class NomeTecService {

  constructor() { }

  getNomesTec():string[]{
    return ['Angular 2','TypeScript','JavaScript','HTML5','CSS3','Desenvolvendo com angular 2'];
  }
  
}
