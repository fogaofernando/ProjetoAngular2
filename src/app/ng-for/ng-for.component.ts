import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  pessoas:any[] =  [
    {id:1,nome:"João"}, 
    {id:2,nome:"Maria"},
    {id:3,nome:"Thiago"},
    {id:4,nome:"José"}];

  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, pessoas: any){
    return pessoas.id;
  }

  atualizar():void{
    
    this.pessoas = [
      {id:1, nome:"João"},
      {id:2,nome:"Maria"},
      {id:3,nome:"Thiago"},
      {id:4,nome:"José"},
      {id:5,nome:"Tatat"}
    ];
  
  }


}
