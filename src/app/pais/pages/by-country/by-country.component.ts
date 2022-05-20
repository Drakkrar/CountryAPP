import { Component, ElementRef, ViewChild } from '@angular/core';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{

  searchQuery: string = 'Hi';
  isResponseEmpty: boolean = false;

  @ViewChild('inputSearch') inputSearch!:ElementRef<HTMLInputElement>;

  constructor( private paisService: PaisService) { }
  
  search(){
    if (!this.searchQuery.length){
      this.inputSearch.nativeElement.classList.add('is-invalid');
      return;
    }  
    
    if(this.inputSearch.nativeElement.classList.contains('is-invalid')){
      this.inputSearch.nativeElement.classList.remove('is-invalid');
    }

    this.isResponseEmpty = false;

    this.paisService.searchCountry(this.searchQuery)
      .subscribe( resp =>{
        if(!resp){
          this.isResponseEmpty = true;
          return;
        }
        console.log(resp);
      });
    
    this.searchQuery = '';
  }

}
