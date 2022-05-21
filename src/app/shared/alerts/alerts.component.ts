import { Component } from '@angular/core';
import { AlertsService } from '../service/alerts.service';
import { Alert } from '../interfaces/alert.interface';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: [`.alert:hover{ background-color: #ffff }
            .toast-header{color:red}`]
})
export class AlertsComponent{

  constructor(public alertService :AlertsService) { 
  }

  get alerts(): Alert[] {
    return this.alertService.messages;
  }

  onDelCurrClick(alert:Alert) : void {
    this.alertService.deleteFromArr(alert);
  }
}
