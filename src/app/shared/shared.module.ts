import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertsComponent } from './alerts/alerts.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    AlertsComponent
  ]
})
export class SharedModule { }
