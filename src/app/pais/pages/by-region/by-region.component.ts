import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent{

  constructor(private paisService: PaisService) { }

  region: string[] = [
    'africa', 'americas', 'asia', 'europe', 'oceania'
  ]
  regionData: Country[] = [];

  activeRegion: string = '';

  getCSSClass(reg:string) : string {
    return (reg === this.activeRegion) ? 
        'btn btn-primary me-3': 
        'btn btn-outline-primary me-3';
  }

  setActiveRegion(selected:string) : void {
    if (selected === this.activeRegion){
      return;
    }
    this.activeRegion = selected;

    this.paisService.getByRegion(selected)
      .subscribe(resp => {
        if(!resp){
          this.regionData = [];
          return;
        }
        this.regionData = resp;
      });
  }

}
