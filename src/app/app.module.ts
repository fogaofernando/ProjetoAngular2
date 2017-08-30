import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NomeTecService } from './di/nome-tec.service';
import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { AlertaService } from './alerta.service';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
//import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DiComponent } from './di/di.component';

 

//import { RouterModule, Routes } from '@angular/router';

import { RoutingModule } from './app-routing';
import { NgClassModule } from './ng-class/ng-class.module';


/*
const appRoutes: Routes = [
  /*{path :'if', component : NgIfComponent},
  {path :'for', component : NgForComponent},/
  { 
    path: '',
    redirectTo: 'for', //página inicial
    pathMatch: 'full'
  }
  /*{ path: '**', component: PageNotFoundComponent }/
]
*/

@NgModule({
  declarations: [               //Todas as classes e componentes que iremos usar
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    SwitchCaseComponent,
    NgForComponent,
    //NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    EventBindingComponent,
    InputOutputComponent,
    FormularioComponent,
    DiComponent
  ],
  imports: [                    //Módulos importados para o nosso projeto usar
    /*RouterModule.forRoot(
      appRoutes
    ),*/

    BrowserModule,
    FormsModule,
    HttpModule,
    NgClassModule,
    RoutingModule
  ],
  providers: [AlertaService,NomeTecService],    //Todos os serviços disponíveis na aplicação
  bootstrap: [AppComponent]      //Diz ao angular onde começar a renderizar
})
export class AppModule { }
