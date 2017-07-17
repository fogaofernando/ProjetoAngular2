import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  numero:number = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementarNumero():void{
    this.numero++;
  }

}
