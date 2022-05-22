import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-badges-accordion',
  templateUrl: './badges-accordion.component.html',
  styles: [
  ]
})
export class BadgesAccordionComponent {

  @Input() title:string = '';
  @Input() tags:string[] = [];
  @Input() headerID:string = '';
  @Input() bodyID:string= '';
}
