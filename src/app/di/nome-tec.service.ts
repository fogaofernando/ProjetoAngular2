import { Injectable } from '@angular/core';
import { MeuLogService } from './meu-log.service' ;

@Injectable()
export class NomeTecService {

  meuLog: MeuLogService;
  constructor(meulog: MeuLogService) { 
    this.meuLog = meulog;
  }

  getNomesTec():string[]{
    this.meuLog.setLog("Consultando array de tecnologias !!!");
    return ['Angular 2','TypeScript','JavaScript','HTML5','CSS3','Desenvolvendo com angular 2'];
  }
  
}
