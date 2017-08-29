import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service' ;

@Injectable()
export class NomeTecService {

  
  
  constructor(@Optional() private meulog:MeuLogService ) { }

  getNomesTec():string[]{
    
    if(this.meulog){
      this.meulog.setLog('consultou o array de tecnologias');
    }
    
    this.meulog.setLog("Consultando array de tecnologias !!!");
    return ['Angular 2','TypeScript','JavaScript','HTML5','CSS3','Desenvolvendo com angular 2'];
  }
  
}
