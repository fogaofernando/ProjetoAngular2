import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao:boolean = false;
  listaItens:string[]=[];

  constructor() { }

  ngOnInit() {
  }

  meuClick():void{
    console.log('Evento meuClick do botão');
  }

  digitou($event):void{
    console.log($event);
  }

  digitouVarTemplate(valor):void{
    console.log(valor);
  }


  validaSenha(valor:string):void{
    
    if(valor.length>5){
      this.habilitarBotao = true;
    }else{
      this.habilitarBotao = false;
    }

  }

  gravarSenha(senha):void{
    alert('senha gravada com sucesso. Senha: '+senha);
  }
  
  adicionarLista(valor):void{
    this.listaItens.push(valor);
  }

  removerLista(i:number):void{
    this.listaItens.pop(i);
  }
}
