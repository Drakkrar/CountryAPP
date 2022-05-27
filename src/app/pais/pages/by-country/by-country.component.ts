import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {cursor: pointer;
        z-index: 2}
  `
  ]
})
export class ByCountryComponent{

  countries: Country[] = [];
  searchQuery: string = '';

  suggestions: Country[] = [];
  displaySuggestions: boolean = false;


  constructor( private paisService: PaisService) { }
  
  search(query:string) : void{
    if (!query){
      return;
    }
    if (this.displaySuggestions){
      this.displaySuggestions = false;
    }

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

  similar(query:string) : void{
    if (!query){
      this.displaySuggestions = false;
      return;
    }

    this.paisService.searchCountry(query)
      .subscribe( resp => this.suggestions = resp.splice(0,5));
    
    this.displaySuggestions = true;
  }

}
