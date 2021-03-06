import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu:string;                     //property-binding
  @Output() nomeClicado = new EventEmitter; //event-binding

  constructor() { }
  ngOnInit() { }

  enviarNome(value):void{
    this.nomeClicado.emit(value);
  }

}
