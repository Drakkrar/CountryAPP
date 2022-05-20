import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AlertsService } from '../../shared/service/alerts.service';
import { Country } from '../interfaces/country.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  constructor( private http: HttpClient, private alertService: AlertsService) { }
  
  
  private log(message:string) : void {
    this.alertService.add(message);
  }

  private handleError<T>(operation = 'operation', alert?:string, result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      console.log(`${operation} failed due: ${error.message}`);
      this.log(`${alert}`);
      return of(result as T);
    }
  }
  
  searchCountry(query:string): Observable<Country> {

    const url = `${this.apiUrl}/name/${query}`;

    return this.http.get<Country>(url).pipe(
      catchError(this.handleError<Country>('searchCountry', `${query} es un termino invalido.`))
    );
  }

}
