import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  private nomesPessoas:string [] = ['Joao','Maria','Angular 2','Thiago'];

  constructor() { }

  getPessoas():string[]{
    return this.nomesPessoas;
  }

  setPessoa(nome:string):void{
    this.nomesPessoas.push(nome);
  }

}
