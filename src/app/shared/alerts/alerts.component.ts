import { Component } from '@angular/core';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: [`.alert:hover{ background-color: #ffff }`]
})
export class AlertsComponent{

  constructor(public alertService :AlertsService) { 
  }

  get alerts() : string[] {
    return this.alertService.messages;
  }

  onDelCurrClick(query:string) : void {
    this.alertService.deleteFromArr(query);
  }
}
