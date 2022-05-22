import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent{

  countries: Country[] = [];
  searchQuery = '';

  constructor(private paisService: PaisService) { }

  search(query:string){
    this.searchQuery = query;

    this.paisService.searchCapital(this.searchQuery)
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

  }

}
