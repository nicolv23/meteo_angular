import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from '../environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getInformationMeteo(nomVille: string){
    this.http.get(environnement.weatherApiBaseUrl, {
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
