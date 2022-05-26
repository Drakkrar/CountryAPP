import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styles: [
  ]
})
export class CountrySearchComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeHolder: string = '';  

  debouncer: Subject<string> = new Subject();
  searchQuery: string = '';

  ngOnInit(): void {
      this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit(value)
      })
  }
  

  keyPressed(){
    this.debouncer.next( this.searchQuery );
  }


  search(){
    if (!this.searchQuery.length){
      return;
    }

    this.onEnter.emit(this.searchQuery);
  }

}
