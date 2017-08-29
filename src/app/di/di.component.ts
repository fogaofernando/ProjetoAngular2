import { Component, OnInit } from '@angular/core';
import { NomeTecService  } from './nome-tec.service';
import { MeuLogService } from './meu-log.service' ;


@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  tecnologias :String [] = [];
  //meuService: NomeTecService;
  meuLog: MeuLogService;
  
  constructor(private meuService:NomeTecService) { 
    this.meuLog = new MeuLogService;
    this.tecnologias = meuService.getNomesTec();
  }

  ngOnInit() {
  }

}
