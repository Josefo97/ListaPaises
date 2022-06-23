import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaisModel } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

   private urlBase = environment.paisesUrl;

  constructor(private http: HttpClient) { }

  obtenerPaises(): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>(this.urlBase + '/all');
  }
  paisPorNombre(nombrePais: string): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>(this.urlBase + `/name/${nombrePais}`);
  }
  paisPorCodigo(codigo: string): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>( this.urlBase + `/alpha/${codigo}` );
  }
  paisPorCapital(capital: string): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>( this.urlBase + `/capital/${capital}` );
  }
  paisPorRegion(region: string): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>( this.urlBase + `/region/${region}` );
  }

}
