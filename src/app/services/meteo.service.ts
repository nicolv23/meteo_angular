import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from '../environnements/environnement';
import { InformationMeteo } from '../models/meteo.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getInformationMeteo(nomVille: string): Observable<InformationMeteo> {
    return this.http.get<InformationMeteo>(environnement.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environnement.XRapidAPIHostHeaderName, environnement.
      XRapidAPIHostHeaderValue)
      .set(environnement.XRapidAPIKeyHeaderName, environnement.
      XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', nomVille)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
