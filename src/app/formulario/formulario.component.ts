import { Component, OnInit } from '@angular/core';
import { Contatos } from "app/formulario/contatos";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Thiago','(99)9999-9999','email@email.com');
  constructor() { }

  ngOnInit() {
  }

}
