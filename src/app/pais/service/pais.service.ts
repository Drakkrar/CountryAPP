import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { AlertsService } from '../../shared/service/alerts.service';
import { Country } from '../interfaces/country.interface'; 
import { Alert } from '../../shared/interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'flags,name,capital,population,cca2');
  }
  
  constructor( private http: HttpClient, private alertService: AlertsService) { }
  
  
  private log(alert:Alert) : void {
    this.alertService.add(alert);
  }

  private handleError<T>(operation = 'operation', alert?:string, result?: T){
    return (error: any): Observable<T> =>{
      let obj: Alert = { 
        title:`${error.status}`,
        msg: `${alert}`
      }
      console.error(error);
      console.log(`${operation} failed due: ${error.message}`);
      this.log(obj);
      return of(result as T);
    }
  }
  
  searchCountry(query:string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${query}`;

    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(
      catchError(this.handleError<Country[]>('searchCountry', `${query} es un termino de busqueda invalido.`))
    );
  }

  searchCapital(query:string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/capital/${query}`;

    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(
      catchError(this.handleError<Country[]>('searchCapital', `${query} es un termino invalido.`))
    );
  }

  getByCode(id:string): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url).pipe(
      catchError(this.handleError<Country[]>('getByCode', `${id} es un termino invalido.`))
    );
  }

  getByRegion(region:string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(
      catchError(this.handleError<Country[]>('getByCode', `${region} es un termino invalido.`))
    );
  }

}
