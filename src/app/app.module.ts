import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndividuComponent } from './individu/individu.component';
import {RouterModule,Routes} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import {IndividuService} from "../service/individu.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: 'listIndividu',
    pathMatch: 'full',
  },
  {
    path: 'listIndividu',
    component: IndividuComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    IndividuComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    DataTableModule,
    SharedModule,

  ],
  providers: [IndividuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
