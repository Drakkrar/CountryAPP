import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
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
  @ViewChild('inputSearch') inputSearch!:ElementRef<HTMLInputElement>;
  
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
      this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit(value)
      })
  }
  
  searchQuery: string = '';

  keyPressed(){
    this.debouncer.next( this.searchQuery );
  }


  search(){
    if (!this.searchQuery.length){
      this.inputSearch.nativeElement.classList.add('is-invalid');
      return;
    }

    if(this.inputSearch.nativeElement.classList.contains('is-invalid')){
      this.inputSearch.nativeElement.classList.remove('is-invalid');
    }

    this.onEnter.emit(this.searchQuery);
  }

}
