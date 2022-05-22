import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../service/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country, Languages } from '../../interfaces/country.interface';
import { AccordionInfo } from '../../interfaces/accordion-info.interface';


@Component({
  selector: 'app-display-country',
  templateUrl: './display-country.component.html',
  styles: [
  ]
})
export class DisplayCountryComponent implements OnInit {

  country!: Country;
  cntryTranslations: string[] = [];

  constructor( private currRoute: ActivatedRoute, private paisService: PaisService ) { }

  setTranslations(){
    let keys: string[] = Object.keys(this.country.translations);
    for( let key of keys){
      this.cntryTranslations.push(this.country.translations[key].official);
    }
  }

  ngOnInit(): void {

    this.currRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getByCode( id )),
      )
      .subscribe( resp => {
        this.country = resp[0];
        this.setTranslations();
      });

    // this.currRoute.params
    //   .subscribe( ({ id }) =>{

    //     this.paisService.getByCode(id)
    //       .subscribe( country =>{
    //         console.log(country);
    //       });
    //   });
  }

}
