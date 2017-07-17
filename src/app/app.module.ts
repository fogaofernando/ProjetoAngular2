import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { AlertaService } from './alerta.service';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

@NgModule({
  declarations: [               //Todas as classes e componentes que iremos usar
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    SwitchCaseComponent
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
