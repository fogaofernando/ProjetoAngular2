import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { AlertaService } from './alerta.service';

@NgModule({
  declarations: [               //Todas as classes e componentes que iremos usar
    AppComponent,
    ListaPessoaComponent
  ],
  imports: [                    //Módulos importados para o nosso projeto usar
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlertaService],    //Todos os serviços disponíveis na aplicação
  bootstrap: [AppComponent]      //Diz ao angular onde começar a renderizar
})
export class AppModule { }
