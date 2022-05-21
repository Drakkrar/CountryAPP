import { Injectable } from '@angular/core';
import { Alert } from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  messages: Alert[] = [];

  add(alert: Alert) : void {
    if (this.messages.includes(alert)){
      return;
    }

    if (this.messages.length > 3 ){
      this.messages = this.messages.slice(0,3);
    }

    this.messages.unshift(alert);
  }

  deleteFromArr(query:Alert | null): void{
    if ( query === null){
      return;
    }
    let index = this.messages.indexOf(query)
    this.messages.splice(index,1)
  }

}
