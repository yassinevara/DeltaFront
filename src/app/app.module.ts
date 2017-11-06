import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {IndividuComponent} from "./individu/individu.component";
import {IndividuService} from "../service/individu.service";
import { NewIndividuComponent } from './new-individu/new-individu.component';
import { HeaderComponent } from './header/header.component';
import { EditIndividuComponent } from './edit-individu/edit-individu.component';
import { VersementComponent } from './versement/versement.component';
import {VersementService} from "../service/versement.service";
import {CallFunction} from "../directive/CallFunction";

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: 'listIndividu',
    pathMatch: 'full',
  },
  {
    path:'newIndividu',
    component: NewIndividuComponent
  },
  {
    path: 'listIndividu',
    component: IndividuComponent
  },
  {
    path: 'editIndividu/:id',
    component: EditIndividuComponent
  },
  {
    path: 'versement',
    component: VersementComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IndividuComponent,
    SidebarComponent,
    NewIndividuComponent,
    HeaderComponent,
    EditIndividuComponent,
    VersementComponent,
    CallFunction



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,


  ],


  providers: [IndividuService,VersementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
