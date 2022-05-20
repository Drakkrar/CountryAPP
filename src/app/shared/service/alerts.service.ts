import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  messages: string[] = [];

  add(alert: string) : void {
    if (this.messages.includes(alert)){
      return;
    }

    if (this.messages.length > 3 ){
      this.messages = this.messages.slice(0,3);
    }

    this.messages.unshift(alert);
  }

  deleteFromArr(query:string | null): void{
    if ( query === null){
      return;
    }
    
    let index = this.messages.indexOf(query);

    if (index > -1) {
      this.messages.splice(index,1);
    }
  }

}
