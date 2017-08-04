import { Injectable } from '@angular/core';
import { MeuLogService } from './meu-log.service' ;

@Injectable()
export class NomeTecService {

  
  
  constructor(private meulog: MeuLogService) { 
  
  }

  getNomesTec():string[]{
    this.meulog.setLog("Consultando array de tecnologias !!!");
    return ['Angular 2','TypeScript','JavaScript','HTML5','CSS3','Desenvolvendo com angular 2'];
  }
  
}
