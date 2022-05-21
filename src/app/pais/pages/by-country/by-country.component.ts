import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{

  countries: Country[] = [];
  searchQuery: string = 'Hi';


  constructor( private paisService: PaisService) { }
  
  search(query:string){

    this.searchQuery = query;

    this.paisService.searchCountry(this.searchQuery)
      .subscribe( resp =>{
        if(!resp){
          this.countries = [];
          return;
        }
        this.countries = resp;
      });
    
    this.searchQuery = '';
  }

  similar(query:string){
    console.log(query);
  }

}
