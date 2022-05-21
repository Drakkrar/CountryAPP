import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Pages
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { DisplayCountryComponent } from './pages/display-country/display-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    DisplayCountryComponent,
    CountryTableComponent,
    CountrySearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    DisplayCountryComponent
  ]
})
export class PaisModule { }
