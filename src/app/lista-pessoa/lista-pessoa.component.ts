import { Component, OnInit } from '@angular/core';

import { PessoaServiceService } from './pessoa-service.service' ;

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers:[PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  nome:string = "Thiago";
  pessoa:string[];
  

  constructor(private service: PessoaServiceService) { 

      this.pessoa = service.getPessoas();
  }

  ngOnInit() {}

  enviarNome(){
    this.service.setPessoa(this.nome);
  }


}
